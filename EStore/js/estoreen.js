var currencylist="";
var initData=function(){
	 document.getElementById("merName").innerHTML=responseJson.merName;
	 document.getElementById("merchantId").value=responseJson.merchantId;
	 var currency=responseJson.currency;
	 currencylist=currency.split(",")
	 var objSelectNow=document.getElementById("select1");
	 for(i=0;i<currencylist.length;i++){
        objSelectNow.options.add(new Option(currencylist[i],currencylist[i]));
     }
    
}


var pay=function(){
	var date=new Date();

	var postData=new Object();
	postData.charSet="utf-8";
	postData.version="VER000000002";
	postData.transType="PURC";
	postData.orderNum=CurentTime();
	postData.orderAmount=document.getElementById("orderAmount").value;
	var obj = document.getElementById("select1");
	var index = obj.selectedIndex;
	postData.orderCurrency=obj.options[index].value;
	postData.merID=document.getElementById("merchantId").value;
	postData.acqID="99020344";
	var checkvalue="";
	var chkObjs = document.getElementsByName("iCheck");
	  for(var i=0;i<chkObjs.length;i++){
                    if(chkObjs[i].checked){
                         checkvalue = chkObjs[i].value;
                    }
                }
	postData.paymentSchema=checkvalue;
	postData.transTime=getTransTime();
	postData.signType="sha256";
	postData.frontURL="http://115.28.142.180:8080/EStore/e-righten.html";
	postData.backURL="http://115.28.142.180:8080/EStore/e-righten.html";
	postData.signature=sign(postData,responseJson.key);


	var url = "http://115.28.142.180:8000/pay";

	 var turnForm = document.createElement("form");
        //一定要加入到body中！！
        document.body.appendChild(turnForm);
        turnForm.method = 'post';
        turnForm.action = url;

        //创建隐藏表单

        Object.keys(postData).sort().forEach(function(v) {
            if (postData[v]!==undefined) {
                var newElement = document.createElement("input");
                newElement.setAttribute("name",v);
                newElement.setAttribute("type","hidden");
                newElement.setAttribute("value",postData[v]);
                turnForm.appendChild(newElement);

            }else{
                var newElement = document.createElement("input");
                newElement.setAttribute("name",v);
                newElement.setAttribute("type","hidden");
                newElement.setAttribute("value","");
                turnForm.appendChild(newElement);
            }
        });


        turnForm.submit();

    

}


	var sign=function(data,key){
		var tempArr = [];
	    Object.keys(data).sort().forEach(function(v) {
			if (data[v]===undefined) {
				tempArr.push(v + '=');
			}else{
				tempArr.push(v + '='+data[v]);
			}
			});

		var plainText = tempArr.join('&') + key;
		return hex_sha256(plainText);
	}


	function CurentTime()
    { 
        var now = new Date();
        
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日
        
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
        var ss = now.getSeconds();           //秒
        var ms=now.getMilliseconds();
        var clock = year + "";
        
        if(month < 10)
            clock += "0";
        
        clock += month + "";
        
        if(day < 10)
            clock += "0";
            
        clock += day + "";
        
        if(hh < 10)
            clock += "0";
            
        clock += hh + "";
        if (mm < 10) clock += '0'; 
        clock += mm + ""; 
         
        if (ss < 10) clock += '0'; 
        clock += ss; 
        clock +=ms;
        return(clock); 
}


function CurentTime()
    { 
        var now = new Date();
        
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日
        
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
        var ss = now.getSeconds();           //秒
        var ms=now.getMilliseconds();
        var clock = year + "";
        
        if(month < 10)
            clock += "0";
        
        clock += month + "";
        
        if(day < 10)
            clock += "0";
            
        clock += day + "";
        
        if(hh < 10)
            clock += "0";
            
        clock += hh + "";
        if (mm < 10) clock += '0'; 
        clock += mm + ""; 
         
        if (ss < 10) clock += '0'; 
        clock += ss; 
        clock +=ms;
        return(clock); 
}

function getTransTime()
    { 
        var now = new Date();
        
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日
        
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
        var ss = now.getSeconds();           //秒
        var ms=now.getMilliseconds();
        var clock = year + "";
        
        if(month < 10)
            clock += "0";
        
        clock += month + "";
        
        if(day < 10)
            clock += "0";
            
        clock += day + "";
        
        if(hh < 10)
            clock += "0";
            
        clock += hh + "";
        if (mm < 10) clock += '0'; 
        clock += mm + ""; 
         
        if (ss < 10) clock += '0'; 
        clock += ss; 
        return(clock); 
}


var getPublicKey=function(postData,callback){

    var url = "http://139.196.37.91:3000/message/get_publick_key";
    $.ajax({
        type: 'POST',
        url: url,
        async: true,
        data: postData,
        dataType: 'json',
        success: function(data) {
            callback(data);
        },

        error: function(message) {

            alert(JSON.stringify(message));

        }
    });
}