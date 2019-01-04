("undefined"==typeof window?global:window).JSStream=function(){"use strict";var t=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}();function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var e={none:0,overflow:1,buffererror:2,paramerror:3,nosupport:4},n=function t(e){i(this,t),this.t=e},r=function(){function r(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i(this,r),this.i=0,this.s=t,this.h=e,this.u=new ArrayBuffer(t),this.o=new DataView(this.u)}return t(r,[{key:"avail",value:function(){return 0<this.s-this.i}},{key:"resize",value:function(t){if(this.s<t){this.s=t,this.u=new ArrayBuffer(t);var i=new DataView(this.u);i.set(this.o),this.o=i}return this}},{key:"clear",value:function(){this.i=0}},{key:"writeFloat32",value:function(t){if(!this.avail())throw new n(e.overflow);this.o.setFloat32(this.i,t,this.h),this.i+=4}},{key:"writeFloat64",value:function(t){if(!this.avail())throw new n(e.overflow);this.o.setFloat64(this.i,t,this.h),this.i+=8}},{key:"writeInt32",value:function(t){if(!this.avail())throw new n(e.overflow);this.o.setInt32(this.i,t,this.h),this.i+=4}},{key:"writeArray",value:function(t){var i=this;if(t){var r=this.writeInt8;if(t instanceof Int8Array)r=this.writeInt8;else if(t instanceof Uint8Array)r=this.writeUint8;else if(t instanceof Int16Array)r=this.writeInt16;else if(t instanceof Uint16Array)r=this.writeUint16;else if(t instanceof Int32Array)r=this.writeInt32;else if(t instanceof Uint32Array)r=this.writeUInt32;else if(t instanceof Float32Array)r=this.writeFloat32;else{if(!(t instanceof Float64Array))throw new n(e.nosupport);r=this.writeFloat64}t.forEach(function(t){r.call(i,t)})}}},{key:"writeChar",value:function(t){this.writeByte(t)}},{key:"writeString",value:function(t){for(var i=0;i<t.length;i++)this.writeByte(t.charCodeAt(i))}},{key:"writeByte",value:function(t){this.writeInt8(t)}},{key:"writeInt8",value:function(t){if(!this.avail())throw new n(e.overflow);this.o.setInt8(this.i,t),this.i++}},{key:"writeShort",value:function(t){this.writeInt16(t)}},{key:"writeInt16",value:function(t){if(!this.avail())throw new n(e.overflow);this.o.setInt16(this.i,t),this.i+=2}},{key:"writeUInt32",value:function(t){if(!this.avail())throw new n(e.overflow);this.o.setUint32(this.i,t,this.h),this.i+=4}},{key:"writeUChar",value:function(t){this.writeByte(t)}},{key:"writeUString",value:function(t){for(var i=0;i<t.length;i++)this.writeUByte(t.charCodeAt(i))}},{key:"writeUByte",value:function(t){this.writeUint8(t)}},{key:"writeUint8",value:function(t){if(!this.avail())throw new n(e.overflow);this.o.setUint8(this.i,t),this.i++}},{key:"writeUShort",value:function(t){this.writeUint16(t)}},{key:"writeUint16",value:function(t){if(!this.avail())throw new n(e.overflow);this.o.setUint16(this.i,t),this.i+=2}},{key:"buffer",value:function(){return this.u}},{key:"bufferToBlob",value:function(){return new Blob([this.u])}}]),r}(),s=function(){function r(t){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(i(this,r),!(t&&t instanceof ArrayBuffer))throw new n(e.buffererror);this.i=0,this.s=t.byteLength,this.h=s,this.o=new DataView(t)}return t(r,[{key:"avail",value:function(){return 0<this.s-this.i}},{key:"getAvailLength",value:function(){return this.s-this.i}},{key:"readFloat32",value:function(){if(this.avail()){var t=this.o.getFloat32(this.i,this.h);return this.i+=4,t}throw new n(e.overflow)}},{key:"readFloat64",value:function(){if(this.avail()){var t=this.o.getFloat64(this.i,this.h);return this.i+=8,t}throw new n(e.overflow)}},{key:"readInt32",value:function(){if(this.avail()){var t=this.o.getInt32(this.i,this.h);return this.i+=4,t}throw new n(e.overflow)}},{key:"readUint32",value:function(){if(this.avail()){var t=this.o.getUint32(this.i,this.h);return this.i+=4,t}throw new n(e.overflow)}},{key:"readInt8",value:function(){if(this.avail()){var t=this.o.getInt8(this.i);return this.i++,t}throw new n(e.overflow)}},{key:"readUInt8",value:function(){if(this.avail()){var t=this.o.getUint8(this.i);return this.i++,t}throw new n(e.overflow)}},{key:"readByte",value:function(){return this.readInt8()}},{key:"readUByte",value:function(){return this.readUInt8()}},{key:"readUByte",value:function(){if(this.avail()){var t=this.o.getUint8(this.i);return this.i++,t}throw new n(e.overflow)}},{key:"readInt16",value:function(){if(this.avail()){var t=this.o.getInt16(this.i,this.h);return this.i+=2,t}throw new n(e.overflow)}},{key:"readUint16",value:function(){if(this.avail()){var t=this.o.getUint16(this.i,this.h);return this.i+=2,t}throw new n(e.overflow)}},{key:"readShort",value:function(){return this.readInt16()}},{key:"readUShort",value:function(){return this.readUint16()}},{key:"readArray",value:function(t,i){if(i=i||this.getAvailLength(),!t)throw new n(e.paramerror);var r=void 0;if(t==Int8Array)r=this.readInt8;else if(t==Uint8Array)r=this.readUInt8;else if(t==Int16Array)r=this.readInt16;else if(t==Uint16Array)r=this.readUint16;else if(t==Int32Array)r=this.readInt32;else if(t==Uint32Array)r=this.readUint32;else if(t==Float32Array)r=this.readFloat32;else{if(t!=Float64Array)throw new n(e.nosupport);r=this.readFloat64}for(var s=new t(i),h=0;h<i;h++)s[h]=r.apply(this);return s}}]),r}(),h=h||{};return h.Biostream=s,h.Bostream=r,h}();