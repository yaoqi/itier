// (C) 2011-2012 Alibaba Group Holding Limited.
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License 
// version 2 as published by the Free Software Foundation. 

// Authors :sanxing <sanxing@taobao.com> 

var tmpSql=function(config){
	this.config=config;
}

//拆分sql
tmpSql.prototype.load=function(){
	
}

exports.init=function(config){
	return new tmpSql(config);
}
