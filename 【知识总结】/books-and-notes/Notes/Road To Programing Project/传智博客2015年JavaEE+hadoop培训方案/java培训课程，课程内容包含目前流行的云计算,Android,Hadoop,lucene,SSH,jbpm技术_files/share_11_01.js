//获取光标位置
$.fn.cursorPos = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};
//选中文字
$.fn.caret = function (callback) {
    var el = $(this).get(0);
    var ret = 0;
    if (el.nodeName.toLowerCase() === "textarea") {
        if (el.selectionStart) {
            ret = el.selectionStart;
        } else if (document.selection) {
            var r = document.selection.createRange();
            if (r !== null) {
                var re = el.createTextRange();
                var rc = re.duplicate();
                re.moveToBookmark(r.getBookmark());
                rc.setEndPoint('EndToStart', re);
                ret = rc.text.length;
            }
        }
    }

    if (callback) {

    }
    return ret;
};
//脚本调试器兼容低版本浏览器
window.console = window.console || {
	"log":function(o){
		var q=common.url.getQueryObject();
		if ($("#debug").size() === 0){
			$("body").append($('<ul id="debug" style="position:absolute;top:0;left:0;background:#000;white-space:pre;z-index:999;color:#999;padding:5px;" class="none" ondblclick="$(this).addClass(\'none\');"></ul>'));
		}
		if (Object.prototype.toString.call(o) === "[object Array]"){
			$("#debug").append($("<li>"+Array.prototype.toString.call(o)+"</li>"));
		}else{
			$("#debug").append($("<li>"+o+"</li>"));
		}
	},
	"clear":function(){
		$("#debug").html("");
	}
};
//主脚本
var common = {
	"array":{
		"unique":function(arr){
			var temp = {},
			len = arr.length;
			for (var i = 0; i < len; i++) {
				var tmp = arr[i];
				if (!temp.hasOwnProperty(tmp)) {
					temp[arr[i]] = "hoho";
				}
			}
			arr.length = 0;
			len = 0;
			for (var i in temp) {
				arr[len++] = i;
			}
			return arr;
		}	
	},
	"url":{
		"encode":function(str){
			try{
				s = encodeURIComponent(str);
			}catch(e){
				s = str;
			}
			return s;
		},
		"decode":function(str){
			try{
				s = decodeURIComponent(str);
			}catch(e){
				s = str;
			}
			return s;
		},
		"reg":"((news|telnet|nttp|file|http|ftp|https)://){1}(([-A-Za-z0-9]+(\\.[-A-Za-z0-9]+)*(\\.[-A-Za-z0-9]{2,}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_\\$\\.\\+\\!\\*\\(\\),;:@&=\\?/~\\#\\%]*)*",
		"tripurl":function(s){
			return s.replace(new RegExp(common.url.reg, "gi"), new Array(12).join("aa"));	
		},
		"isValidate":function(s){
			return new RegExp("^"+common.url.reg+"$").test(s);
		},
		"getQueryObject":function(){
			var o = {};
			location.search.slice(1).replace(/([^&=]+)=([^&=]*)/g,function(){
				o[arguments[1]] = common.url.decode(arguments[2]);
				return "";
			});
			return o;
		}
	},
	"string":{
		"getFullLength":function(s){
			return s.replace(/[^\u0000-\u00ff]/g, "aa").length;
		},
		"getContentLength":function(s){
			s = s.replace(/(^\s+|\s+$)/g,'');
			s = s.replace(/(^[\s\n]+)|([\s\n]+$)/,"").replace(/[\s\n]+/g," ");
		    s = s.replace(new RegExp(common.url.reg, "gi"), new Array(12).join("aa"));
		    s = s.replace(/[^\u0000-\u00ff]/g, "aa");
		    return s.length;
		},
		"getSubStr":function(s,k,s2){
			var jstr,s2k=k-s2.length,j=(s2k/2)|0;
			if (k<=0){
				return "";
			}
			if (common.string.getFullLength(s) > s2k && common.string.getFullLength(s)> k){
				jstr = s.slice(0,j);
				while(common.string.getFullLength(jstr+s.charAt(j))<s2k){
					jstr = s.slice(0,++j);
				}
				return jstr+s2;
			}else{
				return s;
			}
		},
		"escHtml":function(s){
			var p = {"<":"&gt;",">":"&lt;","\"":"&quot;","'":"&#039;","&":"&amp;"};
			return s.replace(/<>\"\'/g,function(){return p[arguments[1]];});
		},
		"smartLen":function(str){
		    return Math.ceil(common.string.getContentLength(str)/2);
		},
		"toJSON":function(s){
			if (window.JSON){
				try{
					return JSON.parse(s);
				}catch(e){
					return null;
				}
			}else{
				try{
					eval('common.__json__='+s);
					return common.__json__;
				}catch(e){
					return null;
				}
			}
		},
		"cut":function(str,max){
				var arr=str.replace(new RegExp("("+common.url.reg+")","gi")," $1 ").replace(/(@\b[a-zA-Z][\w\-]{0,19}\b)/," $1 ").split(/\s+/),
					worker = function(last){
						var ak = common.string.getContentLength(arr.join(" "));
						if (ak === max){
							return arr;
						}else if(ak < max){
							if (!last){
								return arr;
							}else{
								if (common.url.isValidate(last)){
									return arr;
								}else if(/^@\b[a-zA-Z][\w\-]{0,19}\b$/.test(last)){
									return arr;
								}else if(max-ak>1){
									arr.push(common.string.getSubStr(last,max-ak-3,"..."));
									return arr;
								}else{
									return worker(arr.pop());
								}
							}
						}else{
							return worker(arr.pop());
						}
					};
				if (str){
					return worker(null).join(" ");
				}else{
					return "";
				}
		}
	},
	//Monitor上报
	"monitor":function(id){
		(new Image(1,1)).src = 'http://share.v.t.qq.com/index.php?c=share&a=monitor&id='+id+'&_='+Math.random();
	},
	"cookie":{
		"get":function(name){
			var r = (new RegExp("\\b"+name+"\\b=([^\\s;]+);?","gi")).exec(document.cookie);
			return r && r[1] && unescape(r[1]);
		},
		"set":function(name,value){
			var Days = 30, exp  = new Date();
	    	if (!value){
	    		Days = -1;
	    		value = "111";
	    	}
	    	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	    	document.cookie = name + "="+ escape (value) + "; expires=" + exp.toGMTString()+"; path=/;domain=qq.com; secure";
		}
	},
	"getToken":function(){
		var c = 5381,
			d = common.cookie.get("p_skey") || common.cookie.get("p_lskey");
			if (d) {
				for (var b = 0, a = d.length; b < a; ++b) {
					c += (c << 5) + d.charCodeAt(b)
				}
				return c & 2147483647;
			} else {
				return c;
			}
	},
	"user":{
		"isUnLogin":function(){
			var uin = common.cookie.get('uin'),
				skey = common.cookie.get('skey'),
				luin = common.cookie.get('luin'),
				lskey = common.cookie.get('lskey'),
				p_uin = common.cookie.get('p_uin'),
				p_skey = common.cookie.get('p_skey'),
				p_luin = common.cookie.get('p_luin'),
				p_lskey = common.cookie.get('p_lskey'),
				ret = 0;
			if ((p_uin && p_skey) || (p_luin && p_lskey)){ //已登录
				if ((uin || luin) && ((uin || luin) !== (p_uin || p_luin))){ //主次登录态不一致
					return 1; //未登录
				}
				if (window.hadlogin){
					return 0;//cgi也说已登录
				}else{
					return 2;
				}
			}else if((uin && skey) || (luin && lskey)){
				return 1;
			}
			return 3; //未登录
		},
		//设置登录用户信息
		"setLoginInfo":function(u){
			var uinfo = function(u){
				common.user.info = u || {};
				common.user.info.hadlogin = true;
				common.user.info.hadreg = false;
				if (u === null){
					common.user.info.hadlogin = false;
					return '<a href="javascript:;" class="ptlogin" data-type="0" title="登录" data-action="showLoginFrame" data-subtype="0">登录</a> | <a href="http://t.qq.com/reg/index.php" target="_blank" title="注册">注册</a>';
				}else if(u.name){
					common.user.info.hadreg = true;
					return ['<a href="',u.wb_url,'" target="_blank" title="',u.wb_title,'">',common.string.getSubStr(u.wb_nick,12,'...'),'</a> | <a href="javascript:;" class="ptlogin" data-type="1" data-subtype="0" data-action="showLoginFrame" data-index="1" title="换个帐号">换个帐号</a>'].join('');
				}else{
					return '请先<a href="http://reg.t.qq.com/invite/" title="开通微博" target="_blank">开通微博</a> | <a href="javascript:;" class="ptlogin" data-type="1" title="换个帐号" data-action="showLoginFrame" data-subtype="0">换个帐号</a>';
				}
			},uinfo2 = function(u){
				common.user.info = u || {};
				common.user.info.hadlogin = true;
				common.user.info.hadreg = false;
				if (u === null){
					common.user.info.hadlogin = false;
					return ['<span class="none fl_name"><a href="javascript:;" title="登录" data-action="showLoginFrame" data-type="0" data-subtype="0">请先登录</a>，</span>转播给你的听众'].join('');
				}else if(u.name){
					common.user.info.hadreg = true;
					return ['<span class="none fl_name" title="',u.wb_title,'"><a href="',u.wb_url,'" target="_blank" class="fl_name_nick">',common.string.getSubStr(u.wb_nick,12,'...'),'</a><label class="fl_name_account">(@',common.string.getSubStr(u.name,12,'...'),')，</label></span>转播给你的听众<a href="javascript:;" title="换个帐号" data-action="showLoginFrame" data-type="1" data-subtype="0"  class="fl_name_change none">换个帐号</a>'].join('');
				}else{
					return ['<span class="none fl_name">请先<a href="',u.wb_url,'" title="开通微博" target="_blank">开通微博</a>，</span>转播给你的听众<a href="javascript:;" title="换个帐号" data-action="showLoginFrame" class="fl_name_change none" data-type="1" data-subtype="0">换个帐号</a>'].join('');
				}
			};
			if (typeof u === "string"){
				u = common.string.toJSON(u);
			}
			if (common.user.isUnLogin()){
				u = null;
				window.hadlogin = '1';
				window.weibo_name = '';
			}else if(hadlogin){
				if (u["name"]){
					window.hadlogin = '1';
					window.weibo_name = u && u.name;
					u.wb_url = u.name && 'http://t.qq.com/'+u["name"] ;
					u.wb_nick = u.nick;
					u.wb_title = '已登录：'+u["nick"]+"("+u["name"]+")";
				}else{
					window.hadlogin = '1';
					window.weibo_name = '';
					u.wb_url = 'http://reg.t.qq.com/invite/';
					u.wb_nick = '还没有开通微博';
					u.wb_title = '还没有开通微博';
				}
			}
			
			$(".uinfo").html(uinfo(u));
			$(".bgcenter_form .t .fl").html(uinfo2(u));
            // 重新登录后更新登录态
            if (u && typeof u.isValidLogin !=='undefined') {
                $('#isValidLogin').val(u.isValidLogin);
                var urllevelVal = $('#urllevel').val();
                if ((urllevelVal==='1' || urllevelVal==='5')
                        &&u.isValidLogin==='1'
                        &&$('.suburl .warn').length===0) {
                    $('<span class="warn">这个链接存在风险，请查实后发表</span>').insertAfter('.suburl .remove_url');
                } else if ((urllevelVal==='1' || urllevelVal==='5')
                        &&u.isValidLogin==='2'
                        &&$('.suburl .warn').length===1) {
                    $('.suburl .warn').remove();
                }
            }
            if (u && typeof u.name !=='undefined') {
                $('a[title="去我的微博"]').attr('href','http://t.qq.com/'+u.name);
            }
			common.click.hideLoginFrame();
			if ((+$("#subtype").val())>0){
				$('#subbtn').removeClass('disabled').trigger("click");
			}else{
				(window.hadlogin === '1' && window.weibo_name) && common.config.bm_friends && common.getMentionsUser();
			}
			common.toggleBmVisible && common.toggleBmVisible();
			common.resizeWin();
		}	
	},
	//选中图片
	"selectImage":function(m){
		var m = $(m),
			mp = m.parent(),
			max = Math.min(mp.find(".media").not(".video").size(),9),
			t = m.hasClass("video") ? "video": "image",
			target = $("input[name='" + {
				"video": "url",
				"image": "pic"
			} [t] + "']"),
			pics = target.val()?target.val().split(","):[],
			src = common.url.encode(m.find("img").attr("src")),
			toolTip = $(".publicer").find(".fleft"),
			isRich = $(".media_rich").size(),
			title = $("input[name='title']").attr("data-default") || $("input[name='title']").val();
			
			if (m.hasClass("selected")) {
				m.removeClass("selected");
				pics = [];
				m.siblings(".image").filter(".selected").each(function(){
					pics.push(common.url.encode($(this).find("img").attr("src")));
				});
				target.val(pics.join(","));
				
				if (isRich) {
					var v = [];
					if (/\S+/.test($("#content").val())) {
						v.push($("#content").val());
					}
					v.push(title);
					v.push($("input[name='url']").attr("data-default"));
					$(".media_rich").addClass("alpha_half");
					$("#content").trigger("focus").attr("data-default", $("#content").val()).val(v.join(" ")).trigger("keyup");
				}
			} else {
				if (mp.find("div.selected").size() < max){
					m.addClass("selected");
					if (t === "video"){
						target.val(target.attr("data-default"));
					}else{
						pics=[];
						mp.find(".selected").filter(".image").each(function(){
							pics.push(common.url.encode($(this).find("img").attr("src")));
						});
						target.val(pics.join(","));
					}
					if (isRich) {
						$(".media_rich").removeClass("alpha_half");
						$("#content").trigger("focus").val($("#content").attr("data-default")).trigger("keyup");
					}
				}
			}
			if (!isRich && max>1){
				toolTip.html('已选择<span class="c_blue">'+pics.length+'</span>张，还可以选择<span class="c_blue">'+(max-pics.length)+'</span>张');
			}
	},
	//获取图片大小
	"getImgsBounds":function(arr,fun,f){
		var o=[],so=[],k=1,c=arr.length,t=+new Date(),_arr=[],done=false,quickSort = function(arr){return arr.sort(function(m1,m2){return (m2.w-m1.w);});};
		if (arr && arr.length){
			for(var i=0;i<arr.length;i++){
				if (!(new RegExp("^"+common.url.reg+"$").test(encodeURI(arr[i])))){
					c--;
					if (c === 0){
						common.resizeWin();
					}
					continue;
				}
				var img = new Image();
					img.onload = function(){
						var w = this.width,h = this.height,s=this.src;
						if (((Math.max(w/h,h/w)<6 || Math.min(w,h)>=280) && Math.min(w,h)>150) || !f){
							o.push({
								 "src":s
								,"w":w
								,"h":h
								,"c":w/h>=1
							});
						}else if(Math.min(w,h)>=90 && Math.max(w/h,h/w)<6){
							so.push({
								"src":s
								,"w":w
								,"h":h
								,"c":w/h>=1
							});
						}
						if (k < c){
							k++;
						}else{
							fun(o.length && quickSort(o) || quickSort(so));done=true;
						}
						this.onload = null;
					}
					img.onerror = function(){
						if (k < c){
							k++;
						}else{
							fun(o.length && quickSort(o) || quickSort(so));done=true;
						}
						this.onerror = null;
					}
					_arr.push(img);
					img.src = common.url.decode(arr[i]);
			}
			setTimeout(function(){
				if (done){
					if (_arr.length === 0){
						common.resizeWin();
					}
					return;
				}
				for (var i=0,k=_arr.length;i<k;i++){
					if (!(_arr[i].complete === true || _arr[i].readyState === "loaded" || _arr[i].readyState === "complete")){
						_arr[i].src="about:blank";
					}
				}
			},2000);
		}
		return o;
	},
	//rich化图片 多图切换
	"picSwitcher":function(arr,btnA,btnB,elem){
		var index = 0,
			pic = $("#pic");
		var doing = function(i){
			index = index+i;
			pic.val(common.url.encode(arr[index].src));
			elem.attr("src",arr[index].src)
				.attr("alt","宽："+arr[index].w+" 高："+arr[index].h)
				.parent()
				.removeClass("viewer_shin").removeClass("viewer_wide")
				.addClass(arr[index].c>=1?"viewer_wide":"viewer_shin");
			btnA.toggleClass("disabled", index === 0);
    		btnB.toggleClass("disabled", index >= arr.length - 1);
		}
		var init = function(){
			if (arr.length && arr.length>1){
				btnA.click(function(){
					if ($(this).hasClass("disabled")){
						return false;
					}
					doing(-1);
					return false;
				});
				btnB.click(function(){
					if ($(this).hasClass("disabled")){
						return false;
					}
					doing(1);
					return false;
				});
				btnA.addClass("disabled");
			}else{
				btnA.addClass("none");
				btnB.addClass("none");
			}
			elem.removeClass("loading");
			doing(0);
			common.resizeWin();
		}
		init();
	},
	// 多图微博滚动器
	"picSlider":function(arr){
		var tem = function(img){
			return [
				'<div class="media image" onclick="common.selectImage(this)" title="宽：'+img.w+' 高：'+img.h+'">',
				'<span class="cicon"></span>',
				'<div class="viewer '+img.c+'"><div class="viewer_area"><img src="'+img.src+'" id="video_cover"></div></div>',
				'</div>'
			].join("\n");
		};
		var tn=arr.length,p=['<div class="slider"><div class="slider_inner">'],cp=0,ps=4,pc=Math.ceil(tn/ps),w=134;
		var slide = function(ii){
			var pos,disabled = 0;
			$("#rbtn").removeClass("disabled");
			$("#lbtn").removeClass("disabled");
			cp=cp+ii*ps;
			if (ii === -1 && cp<=ps-tn){
				cp = ps - tn;
				disabled = $("#rbtn");
			}
			if (ii === 1 && cp>=0){
				cp = 0;
				disabled = $("#lbtn");
			}
			pos = cp * w;
			$(".media_poor").find(".slider_inner").animate({
				"left":pos
			},500,function(){
				disabled && disabled.addClass("disabled");
			});
		}
			for(var i=0;i<tn;i++){
				arr[i]["c"] = arr[i]["c"] && "viewer_wide" || "viewer_shin";
				p.push(tem(arr[i]));
			}
			p.push('</div></div>');
			if (tn>4){
				p.push('<a href="javascript:;" title="向左翻" id="lbtn" class="lbtn disabled" hidefocus></a><a href="javascript:;" title="向右翻" id="rbtn" class="rbtn" hidefocus></a>');
			}

			if (tn>0){
				var myslider = $(p.join(""));
				$(".weibo").addClass("media_poor").append(myslider).find(".media:eq(0)").trigger("click");
				$(".media_poor").find(".slider_inner").width(w*tn);
			}
   			
   			if (tn>4){
				$("#rbtn").click(function(){
					if ($(this).hasClass("disabled")){
						return false;
					}
						slide(-1);
				});
				$("#lbtn").click(function(){
					if ($(this).hasClass("disabled")){
						return false;
					}
					slide(1);
				});
   			}else{
   				$(".media_poor").find(".media:eq(0)").addClass("ml0");
   			}
   			common.resizeWin();
	},
	// 配置信息 是否显示@好友 是否分享到Qzone
	"config":{
		"bm_friends":1,
		"bm_qzone":1
	},
	//加载完成后获取bm标志位信息
	/*
		bm标志位释义
		0 是否显示@朋友
		1 是否显示同步到Qzone
	*/
	"onload":function(){
		 var q  = common.url.getQueryObject()
		 	,bm = (q["bm"]||"")
		 	,cm = (new Array(4).join(1).slice(bm.length))
		 ;
		 	 bm = (bm+cm).split("");
		 	 for(var i=0,k=bm.length;i<k;i++){
		 	 	bm[i]=(+bm[0])&&(+bm[i]);
		 	 }
		 if (bm[1] === 1){/*
		 	 if (window.hadlogin){
		 		common.getMentionsUser();
		 	 }else{
		 	 	$(".mentions_users").addClass("none");
		 	 }*/
		 }else{
		 	common.config.bm_friends = 0;
		 }
		 if (bm[2] === 1){
		 	$("#qzoneflag").removeClass("none");
		 }else{
		 	// 不显示的时候，默认不同步到Qzone
		 	$("#qzoneflag").trigger("click");
		 	common.config.bm_qzone = 1;
		 }
		 if ((bm[1] || bm[2]) && hadlogin){
		 	$(".bgcenter_form .set").removeClass("none");
		 }
		 
		 $(".viewer img").bind("load",function(){
		 	common.resizeImg(this);
		 }).each(function(){
		 	common.resizeImg($(this)[0]);
		 });
		 
		 $("body").click(function(event){
			var t = $(event.target),actionname = t.attr("data-action");
			if (actionname && common.click[actionname]){
				common.click[actionname](event,t);
				return false;
			}else if(actionname){
				//alert("unset action:"+actionname);
			}
			
			if (!$.contains($(".pop_layer")[0],t[0])){
				common.click.hideMention();
			}else{
				//alert($.contains($(".pop_layer")[0],t[0]));
			}
		});
		
		$(".bgcenter").bind("mouseover",function(event){
			var target = event.target,
				p = $(".suburl");
			if ($.contains(p[0],target) || p[0] === target){
				p.addClass("suburl_hover");
			}else{
				p.removeClass("suburl_hover");
			}
		});
		
		common.toggleBmVisible = function(){
			if ((bm[1] || bm[2])){
		 		if (window.hadlogin && window.weibo_name){
		 			$(".bgcenter_form .set").removeClass("none");
		 		}else{
		 			$(".bgcenter_form .set").addClass("none");
		 		}
	 		}
	 	}
	 	
	 	if (window.localStorage && localStorage.getItem("shareqz")){
	 		$('#qzoneflag').trigger("click"); //记忆上次是否分享到Qzone
	 	}
	},
	//点击事件集合
	"click":{
		"clickCount":0,
		"mentions_user":function(o,name){
			common.sendBox.insert(name+" ");
        		common.monitor(169672);//@推荐好友点击量
			common.click.clickCount++;
			$(o).nextAll(".none:eq(0)")
				.removeClass("none");
			$(o).remove();
		},
		"hideMention":function(){
			var mention_layer = $(".pop_layer");
			mention_layer.hide();
		},
		"showMention":function(event,o){
			var rect = $(o).offset(),
				popLayer = $(".pop_layer"),
				width = popLayer.width();
			
			pos = common.sendBox.getFocus(document.getElementById("content"));
	        popLayer.show().css({
	            "left": (rect.left+width>(document.documentElement.clientWidth||document.body.clientWidth)?rect.left-width+$(o).width():rect.left),
	            "top": rect.top+25
	        }).find(".search").show();
	        $('#match').val('').focus();
	        $('#list').empty();
		},
		//显示登录浮层
		"showLoginFrame":function(event,target){
			var type = target.attr("data-type")|0,
				subtype = target.attr("data-subtype")|0,
				loginFrame = $('#login_frame'),
				loginLayer = loginFrame.parent().parent(),
				cs = $("#theme").attr("data-custom")||0,
				params = {
			    	'appid':'46000101',
			    	'daid':6,
			    	's_url':'http://share.v.t.qq.com/index.php?c=share&a=jump&cs=' + cs,
			    	'target':'self',
			    	'style':13,
			    	'link_target':'blank',
			    	'hide_title_bar':1,
			    	'hide_close_icon':1,
			    	'dummy':1,
			    	'bgcolor':'ffffff',
			    	'no_drop_domain':1,
			    	'low_login':1,
			    	'proxy_url':'http://share.v.t.qq.com/index.php?c=share&a=proxy&callback=common.click.resizeLoginFrame'
			    };
			if ( subtype >0 ){
				common.showWeiboForm();
			}
			if ( target.attr("title") === "换个帐号"){
				params["pt_no_auth"] = 1;
			}
			loginLayer.removeClass('none').find('.arrow,.arrow_shadow').removeClass('arrow1 arrow2').addClass(["arrow1","arrow2"][type]);
			
			$('.pop_layer').hide();
			$('#subtype').val(subtype);
		    window.name = '';
		    if (!loginFrame.attr("hasbindEvent")){
		    	loginFrame[0].onload = function(){
		    		common.resizeWin();
		    	}
		    	loginFrame.attr("hasbindEvent",true);
		    };
		    
		    common.click.resizeLoginFrame = function(data){
				loginFrame.attr("height",data.height);
				common.resizeWin(data);
			};
			
		    if (typeof window.postMessage !== 'undefined') {
				window.onmessage = function(event) {
					var msg = event || window.event; // 兼容IE8
					var data = common.string.toJSON(msg.data);
					if (data && data.action){
						switch (data.action) {
							case 'close':
								loginLayer.hide();
							break;
							case 'resize':
								common.click.resizeLoginFrame(data);
							break;
						}
					}
				};
			}
			console.log(params);
		    loginFrame.attr('src','http://ui.ptlogin2.qq.com/cgi-bin/login?' + $.param(params));
		    common.resizeWin();
		},
		//隐藏登录框
		"hideLoginFrame":function(event,t){
			t = t || $('.login_layer').find('.close_btn');
			t.parent().addClass('none');
			$('#subbtn').removeClass('disabled');
			common.resizeWin();
		},
		"toggleQzoneFlag":function(event,t){
			var input = $('#qzone');
			if (t.hasClass('c2')){
				input.val(0);
			    t.removeClass('c2').attr("title","已设置为同步至QQ空间");
			    window.localStorage && localStorage.removeItem("shareqz");
			}else{
				input.val(1);
			    t.addClass('c2').attr("title","已设置为不同步至QQ空间");
			    window.localStorage && localStorage.setItem("shareqz",true);
			}
		},
		"toggleShortUrlChecked":function(event,t){
			var p = t.parent(),
				o = $('input[name="short_url"]'),
				content = $('#content');
			if (p.hasClass("suburl_disabled")){
				p.removeClass("suburl_disabled");
				t.attr("title","点击取消分享网站地址");
				o.val(t.siblings(".short_url").attr("href"));
			}else{
				p.addClass("suburl_disabled");
				o.val("");
				t.attr("title","点击分享网站地址");
			}
			content.trigger('keyup');
			common.resizeWin();
		}
	},
	//获取想要@的好友列表
	"getMentionsUser":function(){
	 	$.ajax({
	 		"type":"get",
	 		"dataType":"json",
	 		"url":"?c=share&a=interactive&t="+(+new Date())+"&g_tk="+common.getToken(),
	 		"success":function(user){
	 			if (user && user.length){
	 			var getUser = function(u){
	 					return '<a href="javascript:;" title="'+u.nick+'(@'+u.name+')" onclick="common.click.mentions_user(this,\''+u.name+'\');" class="'+u.className+'">'+common.string.getSubStr(u.nick,20,'...')+'</a>';
	 				}
			 		,uarr=[];
			 		user = user.sort(function(u1,u2){
			 			return common.string.getFullLength(u2.nick) - common.string.getFullLength(u1.nick);
			 		});
			 		for (var i=0,k=user.length;i<k;i++){
			 			user[i]["className"] = (i>2?"none":"");
			 			uarr.push(getUser(user[i]));
			 		}
			 		uarr.push('<a href="javascript:;" data-action="showMention" title="@其它朋友">@其它朋友</a>');
			 		$(".mentions_users").removeClass("none");
			 		$("#mentions_users").html(uarr.join(" "));
	 			}else{
	 				$(".mentions_users").addClass("none");
	 			}
	 		},
	 		"error":function(){
	 				$(".mentions_users").addClass("none");
	 		}
	 	});	
	},
	//设置快捷键
	"setFastKey":function(){
		$("body").keydown(function(event){
			if (event.ctrlKey){
				if (event.keyCode === 13){
					common.outerSubmit();
				}
			}
			if (event.altKey){
				if (event.keyCode === 85){
					$("#content").focus();
				}
			}
		});
	},
	//发表成功后回调
	"outerSubmit":function(callback){
		//封装给QQ.com域下的网站调用触发提交按钮的,后期维护请勿删除此方法
		$("#subbtn").trigger("click");
		common.outerSubmitCallback = callback;
	},
	//重新设置窗口大小
	"resizeWin":function(data){
		if (window.opener) {
            window.setTimeout(function () {
                var sh = $(".footer").offset().top+60,
                	ch = document.documentElement.clientHeight||document.body.clientHeight,
                	sw=$(".wrap").width() + 50,
                	moveWin = function(){
                		var sx = window.screenLeft||window.screenX,
                			sy = window.screenTop||window.screenY,
                			dw = Math.floor((screen.width - (window.outerWidth||sw))/2),
                			dh = Math.floor((screen.height - (window.outerHeight || sh))/2);
                			window.moveBy(dw-sx,dh-sy);
                	},
                	resizeAgagin = function(){
                		var sh1 = document.documentElement.scrollHeight || document.body.scrollHeight,
                			ch1 = document.documentElement.clientHeight || document.body.clientHeight;
                		if (sh1 > ch1){
                			window.resizeBy(0,sh1-ch1);
                		}
                		moveWin();
                	};
                	window.resizeTo(sw,sh+60);
                	setTimeout(resizeAgagin,100);
            }, 20);
        }else if(common.isInFrame()){
        	var sh = 0,
        		timer = 0,
    			doResize = function(){
    				var h = document.documentElement.scrollHeight || document.body.scrollHeight;
    				if (sh !== h){
    					common.postMessage('{"action":"resize","data":{"height":'+h+'}}');
    					sh = h;
    				}else{
    					clearInterval(timer);
    				}
    			};
    		timer = setInterval(doResize,100);
        }
	},
	"postMessage":function(s){
        var _opener = window.opener;
        var isMSIE = /msie/.test(navigator.userAgent.toLowerCase())
		if (window.postMessage){
			parent.postMessage(s,"*");
            // ie下window.opener.postMessage有bug
            if (_opener) {
                if (isMSIE) {
                    _opener.name = s;
                } else {
                    _opener.postMessage(s, "*");
                }
            }
		}else{
			parent.name = s;
            if (_opener) {
                _opener.name = s;
            }
		}
	},
	//重置图片大小
	"resizeImg":function(img){
		var viewer = $(img).parent(".viewer");
		if (viewer.size()){
			viewer.removeClass("viewer_wide").removeClass(".viewer_shin");
			if (img.width/img.height>=1){
				viewer.addClass("viewer_wide");
			}else{
				viewer.addClass("viewer_shin");
			}
		}
	},
	//显示调试信息
	"viewDebug":function(){
		$("#debug").removeClass("none");
	},
	//过滤图片
	"filterImages":function(pics,t,f){
		common.getImgsBounds(common.array.unique(pics),function(arr){
				arr = arr.sort(function(m1,m2){return (m2.w-m1.w);});
       	    	if ($(".media_rich").size()){
       	    		$("#pic").val(common.url.encode(arr[0].src));
   	    			if (arr.length){
       					common.picSwitcher(arr,$("#lbtn"),$("#rbtn"),$(".media_rich").find(".viewer").find("img"));
       				}else{
       					$(".media_rich").find(".media").addClass("none");	
       				}
       			}else{
       				$("#pic").val("");
       				common.picSlider(arr);
       			}
       		},f);
	},
	//获取网页中的图片		
	"getImages":function(pics){
		var paras   = common.url.getQueryObject(),
			type   = +$("input[name='type']").val(),
			rtype  = (function(){
					var elem = $("input[name='rtype']"),
						rtype = +elem.val();
						if (rtype !== 8){
							rtype = 0;
							elem.val(rtype);
						}
						return rtype;
					})(),
			summary= $("input[name='summary']").val(),
			t      = +new Date(),
			isRich = !!(paras["line1"]||paras["line2"]||paras["line3"]),
			getPics= function(pics){
				var b = [];
				for(var i=0,k=pics.length;i<k;i++){
					pics[i] = common.url.decode(pics[i]).replace(/\\/g,'');
					if (common.url.isValidate(pics[i])){
						b.push(pics[i]);
					}
				}
				return b.length ? b : null;
			},
			getImagesAgain = function(fn){
				$.get("?c=share&a=pageinfo&appkey="+paras["appkey"]+"&f="+(paras["f"]||"f1")+"&url="+encodeURIComponent(paras["url"])+"&g_tk="+common.getToken(),
				function(d) {
					var ret = +(d && d.ret),
					data = d && d.data;
					if (ret === 0) {
						common.pconf.data = data;
						pics = common.array.unique(getPics(data && data.pics || []) || []);
						type = +(data && data.type);
						if (pics && pics.length) {
							common.getImgsBounds(pics, fn);
						} else {
							fn(data);
						}
					}
				},
				"json");
			},
			picsize = +$("input[name='picsize']").val(),
			lines = [$("input[name='line1']").val(),$("input[name='line2']").val(),$("input[name='line3']").val()],
			detect = function(pics){
				var actionName = "normal.simple";
				if (!(pics.length && pics[0]) && rtype === 0 && (type === 2 || type === 4)){
					type = 1;
				}
				switch(rtype){
					case 0:
						switch(type){
							//type:1-普通网页 2-带图片 3-视频 4-普通rich化 5-普通rich视频
							case 2:common.weibo.normal.images(pics);break;
							case 3:common.weibo.normal.video(common.pconf["data"],pics);break;
							case 4:common.weibo.normal.images(pics);break;
							case 5:common.weibo.normal.video(common.pconf["data"],pics);break;
							default:
								common.weibo.normal.simple(pics);
								if (!common.getWebImages){
									setTimeout(common.getImages,500);
									common.getWebImages = 1;
								}
							break;
						};break;
					case 1:common.weibo.rich.web();break;
					case 2:common.weibo.rich.music();break;
					case 4:common.weibo.rich.video();break;
					case 8:common.weibo.rich.app();break;
				}
			};
		pics = getPics(pics||[]);
		if (pics && pics.length && rtype<2){
			common.getImgsBounds(common.array.unique(pics),detect);
		}else{
			getImagesAgain(detect);
		}
	},
	"weibo":{
		"tpl":{
			"img":function(pics){
				var imgs = [],img;
				if (pics && pics[0]){
					$("input[name='pic']").val(common.url.encode(pics[0].src));
				}
				for(var i=0,k=pics.length;i<k;i++){
					img = pics[i];
					imgs.push([
						'<div class="media image selected" onclick="common.selectImage(this)">',
							'<span class="cicon"></span>',
							'<div class="viewer '+(img.c?'viewer_wide':'viewer_shin')+'"><img src="'+img.src+'" id="video_cover" class="selected"></div>',
						'</div>'
						].join("\n"));
				}
				return imgs.join("\n");
			},
			"video":function(d){
				return ['<div class="media video ml0">',
                  	'<span class="vicon"></span>',
                  	'<span class="cicon"></span>',
                  	'<div class="viewer"><img src="'+d.minipic+'" id="video_minipic" onload="common.resizeImg(this)"/></div>',
              		'</div>'
              	].join("\n");
			},
			"rich":function(){
				var title = ($("input[name='title']").attr("data-default") || $("input[name='title']").val()).replace(new RegExp(common.url.reg,"g"),""),
					content = $("#content"),
					summary = (function(o){
						var str = o.val(),
							a = str.split(/[\r\n]+/g),
							b=[],
							max=92,
							j=max/2,
							jstr;
						if (a.length>1){
							for(var i=0;i<=1;i++){
								b.push(common.string.getSubStr(a[i],j,""));
							}
						}else{
							b.push(common.string.getSubStr(a[0],max,"..."))
						}
						o.val(b.join("\n"));
						return b.join("<br/>");
					})($("input[name='summary']")),
					rtype = $("input[name='rtype']").val(),
					picsize = $("input[name='picsize']").val()|0||1;
					imgsize = {
						"1":{"w":80,"h":80,"s":80},
						"2":{"w":120,"h":90,"s":120},
						"3":{"w":90,"h":120,"s":120}
					}[picsize],
					rpic = $("input[name='rpic']").val()+"/"+imgsize["s"];
					content.val('').trigger("blur");
				return [
					'<div class="weibo_rich weibo_rich_t'+rtype+' weibo_rich_s'+picsize+'">',
						'<a class="weibo_rich_icon" href="javascript:;"><img src="'+rpic+'" width="'+imgsize["w"]+'" height="'+imgsize["h"]+'"/></a>',
						'<div class="weibo_rich_info">',
							'<h4 class="weibo_rich_tit"><a href="javascript:;">'+title+'</a></h4>',
							'<p class="weibo_rich_summary">'+summary+'</p>',
							'<div><a href="javascript:;">点击查看<span class="weibo_rich_arrow"><span class="weibo_rich_arrow_border"></span></span></a></div>',
						'</div>',
					'</div>'
				].join("\n");
			}
		},
		"normal":{
			"simple":function(){
				var trim = function(s){
						return s.replace(/\s+/g," ").replace(/(^\s+|\s+$)/g,'');
					},
					content = $("#content"),
					suburl = $(".suburl"),
					summary= trim($("input[name='summary']").val()),
					title = trim($("input[name='title']").attr("data-default") || $("input[name='title']").val()),
					filterText = function(s,max){
						var arr=[],last;
						if (common.string.getContentLength(s)<=max){
							return s;
						}
						if (new RegExp(common.url.reg+"$").test(s)){
							arr = trim(s.replace(new RegExp("("+common.url.reg+")","gi")," $1 ")).split(/\s+/);
							last = arr.pop();
							return [common.string.cut(arr.join(" "),max-23),last].join(" ");
						}else{
							return common.string.cut(s,max);
						}
					},
					count = suburl.hasClass('suburl_disabled')?280:257;
					title = filterText(trim(title),count);
					summary = filterText(summary,count-common.string.getContentLength(title)-1);
					content.val([summary,title].join(" ")).trigger("focus").trigger("keyup").trigger("blur");
					common.resizeWin();
			},
			"images":function(pics){
				common.weibo.normal.simple();
				common.picSlider(pics);
			},
			"video":function(data,pics){
				var a = [common.weibo.tpl.video(common.pconf["data"])];
				if (pics){
					for(var i=0,k=pics.length;i<k;i++){
						if (common.pconf["data"]["minipic"] === pics[i].src){
							pics.splice(i,1);
						}
					}
					a.push(common.weibo.tpl.img(pics));
				}
        		$(".weibo").html(a.join("\n")).removeClass("none").addClass("media_poor");
        		setTimeout(common.resizeWin,100);
			}
		},
		"rich":{
			"web":function(){
				$(".weibo").html(common.weibo.tpl.rich()).removeClass("none");
				common.resizeWin();
			},
			"music":function(){
				$(".weibo").html(common.weibo.tpl.rich()).removeClass("none");
				common.resizeWin();
			},
			"video":function(){
				$(".weibo").html(common.weibo.tpl.rich()).removeClass("none");
				common.resizeWin();
			},
			"app":function(){
				$(".weibo").html(common.weibo.tpl.rich()).removeClass("none");
				common.resizeWin();
			}
		}
	},
	"showWeiboForm":function(){
		$(".bgcenter_form").removeClass("none");
		$(".bgcenter_result").addClass("none").html("");
	},
	"submit":function(f){
		var  data={}
			,subBtn = $("#subbtn")
			,submitArea = $("#subbtn").parent()
			,successFn = function(){
				var timer = $("#timer");
				var myTimer = setInterval(function(){
					var t = +(timer.html());
						timer.html(--t);
					if (t<=1){
						clearInterval(myTimer);
						common.postMessage('{"action":"success","ret":0,"msg":"发表成功"}');
						if (window === parent || window.opener){
							window.close();
						}
						timer.parent().html("您的浏览器不支持自动关闭，请手动关闭本窗口！");
					}
				},1000);
			}
			,showSuccess = function(d){
                // 名人登录态失效重新登录
                if (d.ret===-2 && d.errcode===4) {
                    common.click.showLoginFrame(null,$(".ptlogin"));
                    $("#subtype").val(1);
                    return;
                }
				submitArea.find(".loading").remove();
				common.outerSubmitCallback && common.outerSubmitCallback(d); // 将返回结果回调给QQ秀
				subBtn.removeClass("disabled");
				var strArr = [],
					timer = 3,
					ret = +d.ret,
					errcode = +d.errcode,
					data = d.data,
					alertSubmit = function(){
						var host = /^https?:\/\/([0-9a-zA-Z\-\.]+)(?::\d+)?\//.exec(document.referrer),
							hostname = host && host[1];
						try{
							if (parent.window !== window && !window.opener && window.location !== parent.location){
								if (hostname && !(/^([0-9a-zA-Z\-]+\.)*(qq|paipai|qzone|3366|gtimg|openmat|yixun|myapp|51buy|weishi|soso|tenpay|imqq)\.com$/.test(hostname))){
									alert("成功分享到腾讯微博");
								}
							}
						}catch(e){
							
						}
					},
					altText = (function(data){
						if (data && data.chancelimit){
							return "今日已达抽奖上限，明日可以继续";
						}
						if (data && data.repeatflag){
							return "重复的转播不增加抽奖机会";
						}
						return "成功转播微博一次，即可获得一次抽奖机会";
					})(data);
				
				if (ret === 0){
					if (data && data.actcompurl){
						strArr.push('<div class="title">');
						strArr.push('<span class="icon_succ"></span>');
						strArr.push('<label class="valign">分享成功</label>');
						if (data.rest){
							strArr.push('<a href="javascript:;" class="btn_orange" title="'+ altText +'">');
							strArr.push('<span class="span_chance">'+ data.rest+'</span>'); 
							strArr.push('</a>');
						}else{
							strArr.push('<a href="javascript:;" class="btn_orange btn_orange_gray" title="'+ altText +'">');
							strArr.push('<span class="span_chance">'+ data.rest+'</span>'); 
							strArr.push('</a>');
						}
						strArr.push('</div>');
                        if (d.msg) {
                            strArr.push('<div class="warn marginbottom10">'+d.msg+'</div>');
                        }
						strArr.push('<iframe src="about:blank" width="100%" height="360" frameborder=0 style="border:1px solid #ccc;display:none;" id="lotteryFrame"></iframe>');
						strArr.push('<div class="msg">');
						//strArr.push('<a href="http://act.t.qq.com/act/share_aggregation?serviceType=0&actType=1&appkey='+$("input[name='appkey']").val()+'" target="_blank" onclick="common.lottery.report(\'BZ_DetailLink\')">活动详情&gt;&gt;</a>');
						strArr.push('<a href="http://act.t.qq.com/act/wire_share/act_share?appkey='+$("input[name='appkey']").val()+'" target="_blank" onclick="common.lottery.report(\'BZ_DetailLink\')">活动详情&gt;&gt;</a>');
						strArr.push('</div>');
						strArr.push('<div class="op"><a href="http://t.qq.com/'+window.weibo_name+'" target="_blank" class="btn_myweibo" title="去我的微博"></a></div>');
					}else{
						strArr.push('<div class="title"><span class="icon_succ"></span><label class="valign">分享成功</label></div>');
                        if (d.msg) {
                            strArr.push('<div class="msg warn">'+d.msg+'</div>');
                        }
						strArr.push('<div class="msg">');
						strArr.push('<span id="timer">'+timer+'</span> 秒后窗口自动关闭，<a href="javascript:self.close();" >立即关闭</a>');
						strArr.push('</div>');
						strArr.push('<div class="op"><a href="http://t.qq.com/'+window.weibo_name+'" target="_blank" class="btn_myweibo" title="去我的微博"></a></div>');
					}
					common.postMessage('{"action":"complete","ret":0,"msg":"发表成功"}');
					alertSubmit();
				}else{
					strArr.push('<div class="title"><span class="icon_error"></span><label class="valign">分享失败</label></div>');
					strArr.push('<div class="msg">');
					strArr.push(d.msg);
					if (ret === -2 && errcode === 2){
						strArr.push('请先<a href="http://reg.t.qq.com/invite/" target="_blank" title="开通腾讯微博" class="c_blue">开通腾讯微博</a>');
					}
					strArr.push('<a href="http://support.qq.com/discuss/858_1.shtml" target="_blank" title="问题反馈" class="c_blue">问题反馈</a>');
					strArr.push('</div>');
					strArr.push('<div class="op">');
					if ((ret === -2 && errcode === 1) || (ret === 3 && (errcode === 3154 || errcode === 3183))){
						window.hadlogin = 0;
						common.user.setLoginInfo(null);
						strArr.push('<a href="javascript:;" class="btn_goback" title="重新登录" data-action="showLoginFrame" data-subtype="2">重新登录</a>');
					}else{
						strArr.push('<a href="javascript:;" class="btn_goback" title="返回" onclick="common.showWeiboForm()">返回</a>');
					}
					strArr.push('</div>');
				};
				$(".bgcenter_form").addClass("none");
				$(".bgcenter_result").html(strArr.join(" ")).removeClass("none");
				if (ret === 0){
					if (data && data.actcompurl){
						if (data.rest){
							$(".btn_orange").one("click",function(){
								$(this).addClass("btn_orange_gray2")
									.find(".span_chance").html(data.rest-1);
								$("#lotteryFrame")[0].onload = function(){
									common.resizeWin();
								};
								$("#lotteryFrame").attr("src",data.actcompurl).show();
								$(".bgcenter_result").find(".msg").css({
									"margin":"-50px 450px 0 20px",
									"text-align":"left",
									"position":"relative",
									"z-index":9999,
									"height":60
								});	
							});
						}
					}else{
						successFn();
						//data.actcompurl
					}
				}
			}
			,showError = function(){
				submitArea.find(".loading").remove();
				subBtn.removeClass("disabled");
				showSuccess({ret:-404,errcode:404,msg:"网络连接失败"});
			};
        var urllevelVal = $('#urllevel').val(), inBlacklist = (urllevelVal==='2'||urllevelVal==='6')?true:false;
		f.find("input,textarea").each(function(){
			if ($(this).attr("name") === "content" && !$('.suburl').hasClass("suburl_disabled") && !inBlacklist){
				data[$(this).attr("name")] = $.trim([$(this).val(),f[0].shorturl.value].join(" "));
			}else{
				data[$(this).attr("name")] = $.trim($(this).val());
			}
		});
		
		data["g_tk"] = common.getToken();
		//http://hudong.qq.com/act_01329_15/
		//showSuccess({"ret":0,"errcode":0,"msg":"\u6210\u529f","data":{"chancelimit":0,"repeatflag":0,"actcompurl":"http:\/\/hudong.qq.com\/act_01329_15\/","rest":2}});
		
		submitArea.append($('<span class="loading"></span>'));
		
		$.ajax({
			"url":f[0].action,
			"dataType":"json",
			"data":data,
			"type":"post",
			"success":showSuccess,
			"error":showError
		});
		
	},
	"bindTextAreaEvent":function(content){
		var popLayer = $('.pop_layer'),
			list = $('#list'),
			friends = $('#friends'),
			searchTxt = $('#match'),
			// 获取当前光标的坐标
			textareaTools = {
		    getInputOffset: function (elem, focusTop, pos) {
		        var that = this,
		            cloneDiv = '{$clone_div}',
		            cloneLeft = '{$cloneLeft}',
		            cloneFocus = '{$cloneFocus}',
		            cloneRight = '{$cloneRight}',
		            none = '<span style="white-space:pre-wrap;"> </span>',
		            div = elem[cloneDiv] || document.createElement('div'),
		            left = elem[cloneLeft] || document.createElement('span'),
		            focus = elem[cloneFocus] || document.createElement('span'),
		            right = elem[cloneRight] || document.createElement('span'),
		            offset = that._offset(elem),
		            index = pos || this._getFocus(elem),
		            focusOffset = {
		                left: 0,
		                top: 0
		            };

		        if (!elem[cloneDiv]) {
		            elem[cloneDiv] = div;
		            elem[cloneLeft] = left;
		            elem[cloneFocus] = focus;
		            elem[cloneRight] = right;
		            div.appendChild(left);
		            div.appendChild(focus);
		            div.appendChild(right);
		            document.body.appendChild(div);
		            focus.innerHTML = '|';
		            focus.style.cssText = 'display:inline-block;width:0px;overflow:hidden';
		            div.className = this._cloneStyle(elem);
		            div.style.cssText = 'visibility:hidden;display:inline-block;position:absolute;z-index:999;left:0;top:0;overflow-x:hidden; overflow-y:auto; +word-wrap:break-word;';
		        };

		        div.style.width = this._getStyle(elem, 'width');
		        div.style.height = this._getStyle(elem, 'height');

		        try {
		            div.scrollLeft = elem.scrollLeft;
		            div.scrollTop = elem.scrollTop;
		        } catch (e) { }; // IE8


		        left.innerHTML = elem.value.substring(0, index).
		            replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>').replace(/\s/g, none);
		        right.innerHTML = elem.value.substring(index, elem.value.length).
		            replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>').replace(/\s/g, none);

		        focus.style.display = 'inline-block';
		        try { focusOffset = this._offset(focus); } catch (e) { };
		        focus.style.display = 'none';

		        return {
		            left: offset.left + focusOffset.left,
		            top: offset.top + focusOffset.top + (focusTop ? focus.offsetHeight : 0)
		        };
		    },

		    // 克隆元素样式并返回类
		    _cloneStyle: function (elem, cache) {
		        if (!cache && elem['${cloneName}']) return elem['${cloneName}'];

		        var className, name,
		            rstyle = /^(number|string)$/,
		            rname = /^(content|outline|outlineWidth)$/, //Opera: content; IE8:outline && outlineWidth
		            cssText = [],
		            sStyle = elem.style;

		        for (name in sStyle) {
		            if (!rname.test(name)) {
		                val = this._getStyle(elem, name);
		                if (val !== '' && rstyle.test(typeof val)) { // Firefox 4
		                    name = name.replace(/([A-Z])/g, "-$1").toLowerCase();
		                    cssText.push(name);
		                    cssText.push(':');
		                    cssText.push(val);
		                    cssText.push(';');
		                };
		            };
		        };
		        cssText = cssText.join('');

		        elem['${cloneName}'] = className = 'clone' + (new Date).getTime();
		        this._addHeadStyle('.' + className + '{' + cssText + '}');

		        return className;
		    },

		    // 向页头插入样式
		    _addHeadStyle: function (content) {
		        var style = this._style[document];
		        if (!style) {
		            style = this._style[document] = document.createElement('style');
		            document.getElementsByTagName('head')[0].appendChild(style);
		        };
		        style.styleSheet && (style.styleSheet.cssText += content) || style.appendChild(document.createTextNode(content));
		    },
		    _style: {},

		    // 获取最终样式
		    _getStyle: 'getComputedStyle' in window ? function (elem, name) {
		        return getComputedStyle(elem, null)[name];
		    } : function (elem, name) {
		        try {
		            return elem.currentStyle[name];
		        } catch (e) {
		            return "";
		        }
		    },

		    // 绑定事件
		    _addEvent: function (elem, type, callback) {
		        elem.addEventListener ?
		            elem.addEventListener(type, callback, false) :
		            elem.attachEvent('on' + type, callback);
		    },

		    // 获取光标在文本框的位置
		    _getFocus: function (elem) {
		        var index = 0;
		        if (elem.nodeName === 'TEXTAREA') {
		            if (document.selection) { // IE Support 
		                elem.focus();
		                var Sel = document.selection.createRange();
		                var Sel2 = Sel.duplicate();
		                Sel2.moveToElementText(elem);
		                var index = -1;
		                while (Sel2.inRange(Sel)) {
		                    Sel2.moveStart('character');
		                    index++;
		                };
		            } else if (elem.selectionStart || elem.selectionStart == '0') { // Firefox support 
		                index = elem.selectionStart;
		            };
		            return (index);

		        } else { // input
		            if (document.selection) { // IE Support 
		                elem.focus();
		                var Sel = document.selection.createRange();
		                Sel.moveStart('character', -elem.value.length);
		                index = Sel.text.length;
		            } else if (elem.selectionStart || elem.selectionStart == '0') { // Firefox support 
		                index = elem.selectionStart;
		            };
		            return (index);
		        };
		    },

		    // 获取元素在页面中位置
		    _offset: function (elem) {
		        var box = elem.getBoundingClientRect(),
		            doc = elem.ownerDocument,
		            body = doc.body,
		            docElem = doc.documentElement,
		            clientTop = docElem.clientTop || body.clientTop || 0,
		            clientLeft = docElem.clientLeft || body.clientLeft || 0,
		            top = box.top + (self.pageYOffset || docElem.scrollTop) - clientTop,
		            left = box.left + (self.pageXOffset || docElem.scrollLeft) - clientLeft;

		        return {
		            left: left,
		            top: top
		        };
		    }
		};
	    content.bind({
	        "mouseup": function () {
	            pos = common.sendBox.getFocus(content[0]);
	        },
	        "mousedown": function () {
	            popLayer.hide()
	        },
	        "keydown": function (event) {
	            var that = $(this), keycode = event.keyCode, searcher = popLayer.find(".search");
	            if (popLayer.is(":visible") && !searcher.is(":visible")) {
	                if (keycode == 13) {
	                    list.find("li.active").trigger("click");
	                    popLayer.hide();
	                    return false;
	                } else if (keycode == 38 || keycode == 40) {
	                    var _index = list.find("li.active").index() || 0, _count = list.find("li").size();
	                    if (event.keyCode == 38) {
	                        _index > 0 ? _index-- : _index = 0;
	                    } else if (event.keyCode == 40) {
	                        _index < _count - 1 ? _index++ : _index = _count - 1;
	                    }
	                    var it = list.find("li:eq(" + _index + ")");
	                    it.trigger("mouseover");
	                    if (event.keyCode == 38) {
	                        if (it[0].offsetTop < it[0].parentNode.scrollTop) { it[0].parentNode.scrollTop -= it[0].offsetHeight; }
	                    }
	                    if (event.keyCode == 40) {
	                        if (it[0].offsetTop >= it[0].parentNode.clientHeight) { it[0].parentNode.scrollTop += it[0].offsetHeight; }
	                    }
	                    return false;
	                }
	            }
	        },
	        "focus": function (e) { $(this).removeClass('tipsbg');$(".subform").addClass("focus");},
	        "blur": function (e) { if (!$(this).val()) { $(this).addClass('tipsbg')};$(".subform").removeClass("focus");},
	        "keyup": function (e) {
	            // 当前光标位置
	            if (e.keyCode == 13 || e.keyCode == 38 || e.keyCode == 40) { return false; }
	            var that = $(this), thatOffset = that.offset(), ttext, pos_start = 0,newPos;
	            
	            pos = common.sendBox.getFocus($("#content")[0]); // 6-20位字母数字下划线或减号
	            pos_start = (pos - 20 > 0 ? pos - 20 : 0);
	            var _tempstr = that.val().slice(pos_start, pos), ttext = ((/@[A-Za-z][0-9A-Za-z0-9\_]{0,19}$/.exec(_tempstr)) || [null])[0];
	            newPos = textareaTools.getInputOffset(that.get(0), true, pos - (ttext||"").length);
	            if (ttext && window.hadlogin) {
	                ttext = ttext.slice(1);
	                var appkey = $('#appkey').val();
	                $.ajax({
	                    type: "GET",
	                    url: "http://share.v.t.qq.com/index.php?c=share&a=matchnick&_" + Math.random(),
	                    data: "appkey=" + appkey + "&match=" + ttext + "&g_tk="+common.getToken(),
	                    dataType:"json",
	                    success: function (d) {
	                        if (d) {
	                            var html = '';
	                            for (var i=0,k=d.length;i<k;i++) {
	                                html += '<li onclick="common.sendBox.insert(\'' + d[i].name + ' \');common.monitor(169673);">' + d[i].nick + ' (' + d[i].name + ')' + '</li>';
	                            }
	                            list.html(html).find("li:eq(0)").addClass("active");
	                            popLayer.css({
	                                "position": "absolute",
	                                "left": (newPos.left+popLayer.width()>(document.documentElement.clientWidth||document.body.clientWidth)?content.width()+content.offset().left-popLayer.width():newPos.left),
	                                "top": newPos.top + 20
	                            }).show().find(".search").hide();
	                        }
	                    }
	                });
	            } else {
	                popLayer.hide();
	            }
	            common.sendBox.checkWords();
	        },
	        "paste":function(){
	        	var t = $(this);
	        	setTimeout(function(){t.trigger("keyup");},100);
	        }
	    });
	    
	    // 好友列表点击
	    list.delegate("li", "mouseover", function () {
	        $(this).addClass("active").siblings().removeClass("active");
	    });
	    
	    // 关闭@朋友弹层
	    popLayer.find('.x_close').click(function () {
	        $('.pop_layer').hide();
	    });

    	// 获取朋友信息
	    searchTxt
	    .keyup(function (event) {
	        if (event.keyCode == 38 || event.keyCode == 40 || event.keyCode == 13) {
	            return false;
	        }
	        var appkey = $('#appkey').val();
	        var match = searchTxt.val();
	        $.ajax({
	            type: "GET",
	            url: "http://share.v.t.qq.com/index.php?c=share&a=matchnick",
	            data: "appkey=" + appkey + "&match=" + match + "&g_tk=" + common.getToken(),
	            dataType:"json",
	            success: function (d) {
	                if (d) {
	                    var html = '';
	                    for (var i=0,k=d.length;i<k;i++) {
	                        html += '<li onclick="common.sendBox.insert(\'' + d[i].name + ' \');">' + d[i].nick + ' (' + d[i].name + ')' + '</li>';
	                    }
	                    $('#list').html(html).find("li:eq(0)").addClass("active"); ;
	                }
	            }
	        });
	    })
	    .keydown(function (event) {
	        var _this = $(this), _activeobj = list.find("li.active"), _index = _activeobj.index() || 0, _count = list.find("li").size();
	        if (event.keyCode == 13) {
	            if (_count > 0) {
	                _activeobj.trigger("click");
	                $('.pop_layer').hide();
	            }
	            return false;
	        }
	        if (_count > 0 && (event.keyCode == 38 || event.keyCode == 40)) {
	            if (event.keyCode == 38) {
	                _index > 0 ? _index-- : _index = 0;
	            } else if (event.keyCode == 40) {
	                _index < _count - 1 ? _index++ : _index = _count - 1;
	            }
	            list.find("li").removeClass("active");
	            var it = $("#list").find("li:eq(" + _index + ")");
	            it.addClass("active");
	            if (event.keyCode == 38) {
	                if (it[0].offsetTop < it[0].parentNode.scrollTop) { it[0].parentNode.scrollTop -= it[0].offsetHeight; }
	            }
	            if (event.keyCode == 40) {
	                if (it[0].offsetTop >= it[0].parentNode.clientHeight) { it[0].parentNode.scrollTop += it[0].offsetHeight; }
	            }
	            return false;
	        }
	    });
	},
	isInFrame:function(){
		var b=false;
		if (!window.opener){
			try{
				if(parent.location.hostname === undefined){
					b = true;
				}else if(parent !== window){
					b = true;
				};
			}catch(e){
				b = true;
			}
		}
		common.isInFrame = function(){
			return b;
		};
		return b;
	},
	"sendBox":{
		// 插入文本
		"insertText":function(text, caret_start, caret_end, holder){
		    var pre;
		    var suff;
		    var holderText;
		    caret_start = caret_start || 0;
		    caret_end = caret_end || 0;
		    holder = $(holder);
		    holderText = holder.val();
		    pre = holderText.substr(0, caret_start);
		    suff = holderText.substr(caret_end);
		    holderText = [pre, text, suff].join("");
		    holder.val(holderText);
		    holder.focus();
		    holder.cursorPos([pre, text].join("").length);
		},
		"insert":function(n){
			var pos_start = (pos - 20 > 0 ? pos - 20 : 0);	// 插入@朋友
			    var alerttext = $("#content").val().substring(pos_start, pos);
			    alerttext = ((/@[A-Za-z][0-9A-Za-z0-9\_]{0,19}$/.exec(alerttext)) || [""])[0].slice(1);
			    common.sendBox.insertText((["@", ""][alerttext.length && 1]) + n, pos - alerttext.length, pos, "#content");
			    pos = common.sendBox.getFocus($("#content")[0]);
			    $('#content').trigger("keyup");
		},
		//RICH背景提示
		"tipsbg":function(){
			    if ((type == 4 || type ==5) && !$.trim($('#content').val())) {
			        $('#content').addClass('tipsbg');
			    }
		},
		// 内容长度判断
		"checkWords":function(){
			var content = $('#content'),
				count = 280 - ($('.suburl').hasClass('suburl_disabled')?0:23),
				l=Math.floor((count - common.string.getContentLength(content.val()))/2),
				textNum = $('#txtLen');
		    if (l < 0) {
		        textNum.html('超出&nbsp;<em style="color:#E56C0A">' + (-l) + '</em>&nbsp;字');
		    } else {
		        textNum.html('还能输入&nbsp;<em>' + l + '</em>&nbsp;字');
		    }
		},
		// 获取光标在文本框的位置
		"getFocus":function(elem){
		    var index = 0;
		    if (document.selection) { // IE
		        elem.focus();
		        var sel = document.selection.createRange();
		        if (elem.nodeName === 'TEXTAREA') {
		            var sel2 = sel.duplicate();
		            sel2.moveToElementText(elem);
		            var index = -1;
		            while (sel2.inRange(sel)) {
		                sel2.moveStart('character');
		                index++;
		            };
		        }
		        else if (elem.nodeName === 'INPUT') { // input
		            sel.moveStart('character', -elem.value.length);
		            index = sel.text.length;
		        }
		    }
		    else if (elem.selectionStart || elem.selectionStart == '0') { // FF
		        index = elem.selectionStart;
		    }
		    return (index);
		},
		"beforeSubmit":function(){
			var container = $('#content'),
				offset = container.offset(),
				text=container.val(),
				rtype = +$('input[name="rtype"]').val(),
				shareUrl = !$('.suburl').hasClass('suburl_disabled'),
				count = shareUrl?257:280,
				subbtn = $(this);
			
	    	if (subbtn.hasClass("disabled")){
	    		return false;
	    	}
	        if (common.user.isUnLogin() || !common.user.info.hadlogin) {
	            //点击按钮未登录
	            common.monitor(165666);
	            common.click.showLoginFrame(null,$(".ptlogin"));
	            $("#subtype").val((+$("#subtype").val())||1);
	            return false;
	        }else if(common.user.info.hadreg === false){
	        	common.postMessage('{"action":"error","ret":1,"msg":"没有开通微博"}');
	        	if (window.confirm("您还未开通微博，是否开通？")){
	        		window.open("http://reg.t.qq.com/invite/?pref=share.v.t.qq.com");
	        	};
	        	return false;
	        }
	        
	        text = common.string.cut(text.replace(/(^[\s\n]+)|([\s\n]+$)/,"").replace(/[\s\n]+/g," "),count);
	        if (/^\s*$/.test(text) && rtype === 0){
	        	common.postMessage('{"action":"error","ret":2,"msg":"内容不能为空"}');
	        	alert("分享内容不能为空");
	        	return false;
	        }
	        container.val(text).trigger("keyup");
            var showRelogin = function(){
                var urllevelVal = $('#urllevel').val(),
                    isValidLoginVal = $('#isValidLogin').val();
                if (isValidLoginVal==='0' && (urllevelVal==='1' || urllevelVal==='5') ) {
                    return true;
                } else {
                    return false;
                }
            };
	        if(window.hadlogin){
	    		subbtn.addClass("disabled");
                if (showRelogin()) {
                    // 名人重新重新登录完之后自动发布
                    common.click.showLoginFrame(null,$(".ptlogin"));
                    $("#subtype").val(1);
                } else {
                    common.submit($('#subform'));
                }
        		common.monitor(165670);
	    	}

		}
	}
};

// 字符串长度
var ptlogin2_onResize = function(width, height) {
      login_wnd = document.getElementById("login_frame");
      if (login_wnd)  {
          //login_wnd.width = width;
          login_wnd.height = height;
          login_wnd.style.visibility = "hidden";
          login_wnd.style.visibility = "visible";
      }
},ptlogin2_onClose = function(){
    $('.login_layer').hide();
};

$(document).ready(function () {
	//将文字内容超出140字的情况进行上报
	var content = $("#content"),
		loginLayer = $('.login_layer'),
		getPics = function(conf){
			var pics;
			if (!conf){
				pics = null;
			}else{
				if (conf.data && conf.data.pics){
					pics = common.string.toJSON(conf.data.pics);
				}else if(conf.data && conf.data.minipic){
					pics = [conf.data.minipic];
				}
			}
			return pics;
		},
		paras = common.url.getQueryObject(),
		pics;
		common.pconf = common.string.toJSON(window.pconf);

    if (common.string.smartLen(content.val()) > 140) {
        common.monitor(165673);
    }
	common.onload();
	common.getImages(getPics(common.pconf));
	common.setFastKey();//设置快捷键
	!(window.pics && window.pics.length) && common.resizeWin();
    common.sendBox.checkWords();//计算字符
    common.sendBox.tipsbg();	//显示默认提示
    common.bindTextAreaEvent(content); //发表框事件绑定
    common.user.setLoginInfo(uinfo);
    $('#subbtn').bind("click",common.sendBox.beforeSubmit);	//发表按钮事件绑定
    if (common.user.isUnLogin() === 1){
    	console.log('set login layer transparent');
    	loginLayer.addClass('transparent');
		common.click.showLoginFrame(null,$(".ptlogin"));
		setTimeout(function(){
			common.click.hideLoginFrame();
			loginLayer.removeClass('transparent').addClass('none');
		},1000);
    }
    // 如果分享地址为空，则不显示分享控制栏
    if (!paras['url']){
    	common.click.toggleShortUrlChecked(null,$('.remove_url'));
    }
    if (hadlogin == 1) {
        common.monitor(165665); //已经登录数据上报
    } else {
        common.monitor(165672); //未登录数据上报
    }
    //console.log("%c\n%c %c 腾讯微博一键分享组件\n  %chttp://dev.t.qq.com/websites/share/ (申请地址) http://t.qq.com/laozi12345 (问题反馈)\n %c","padding:10px 50%;","background:#f00;padding:25px;font-size:0;background:url(http://app.qlogo.cn/mbloghead/da38b010040c33419868/50) no-repeat;vertical-align:top;border-radius:50%;margin-bottom:-50px;","color:#5299C7;font-size:24px;font-family:微软雅黑;line-height:10px;","padding-left:45px;display:block;color:#090;","padding:5px 0;");
    /*调试信息*/
    //common.submit($("#subform")); 
});
/*  |xGv00|3db0c666e9e6cc837411d117c8b36e0b */