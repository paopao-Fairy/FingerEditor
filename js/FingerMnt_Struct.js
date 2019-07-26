//本文档为根据4.0已存在的C++特征数据结构体，重新设计类似数据格式，以便使用前端重写特征数据的相关编辑工作。

/*
    O┌───────→ X(COLUMN)
         │╲↙θ∈[0,359]
         │     ╲
         │         ╲
         │              ↘
     ↓
     Y(ROW)
*/
//常量的定义   在未赋值但必须要存储时可以使用默认是常量值
//(function(){
	var TRI_LENGTH = 1652;//【捺印平面或者滚动指纹的特征数据长度是1652】
	var FINGER_MINUTIA_NUM = 200;

	//纹形
	var	FINGER_MNTRP_UNDET = 0;		/* 不确定 */
	var	FINGER_MNTRP_ARCH = 1;		/* 弓型  */
	var	FINGER_MNTRP_LEFTLOOP = 2;		/* 左箕 */
	var	FINGER_MNTRP_RIGHTLOOP = 3;		/* 右箕 */
	var	FINGER_MNTRP_WHORL = 4;	    /* 斗  */
	/*unsigned char	whorltype;	//30  斗型纹旋转方向
	// 0-不确定
	// 1-正旋
	// 2-反旋*/

	FingerMinutia = function(){
		var x=0;// 			
		var y=0;//	
		var a=0;// 细节角度【特征方向】
		var c=0;//1 可信度【特征质量】
		var type=0;//1 特征点类型或其它 保留
	}
	
	//人员=====
	var FINGER_MNTSTRUCT = function(){//只定义属性
		//console.log("被调用了");
		var MntVersion=0;		//0 特征提取版本 0-人工提取
		var width_2=0;			//2-4 0-缺指
		var height_2=0;			//4-6 0-缺指
		var tcd = new Array(10);//6-16 十指联指纹型
		var f_position=0;		//16-17 指位 1-10，0-未知
		var region = 0;			//指纹区域
		var qualitity = 0;  	//质量
		var minutiae_num = 0; 	//特征点有效数
		
		var fort_2 = 0;			//20-22指纹方向-与指纹根基线垂直并指向指尖方向
		var cfort = 0;			//22指纹方向置信度
		var cfrp = 0;			//23纹型置信度
		var cfrp0 = 0;			//24副纹型置信度
		var cfc = 0;			//25中心置信度
		var cfe = 0;			//26下中心置信度
		var cfl = 0;			//27左三角置信度
		var cfr = 0;			//28右三角置信度
/* 纹型, ridge pattern , can be the following values:
	MNTRP_UNDET, MNTRP_ARCH, MNTRP_LEFTLOOP, MNTRP_RIGHTLOOP, MNTRP_WHORL.
*/
		var rp = 0;				//29指纹纹型
		var whorltype = 0;		//30斗型纹旋转方向
		var rp0	= 0;			//31副纹型
		var whorltype0 = 0;		//32副纹型旋转方向
		var scar = 0;			//33伤疤
		// 0-不定
		// 1-有伤疤
		// 2-无伤疤
		var cx_2 = 0;				//34上中心
		var cy_2 = 0;				
		var ca_2 = 0;				//指纹中心点_特征方向
		var ex_2 = 0;				//下中心【副中心】
		var ey_2 = 0;				//上中心
		var	ldx_2 = 0;				//44  左三角
		var	ldy_2 = 0;
		var	rdx_2 = 0;				//48  右三角
		var	rdy_2 = 0;       		 //50-52
		var fingerMinutiaArr = new Array(FINGER_MINUTIA_NUM);
	}

//})()
