define(["./when-ca391574","./PrimitivePipeline-c896ba3a","./createTaskProcessorWorker","./Transforms-5295b227","./Cartesian2-5b63e672","./Check-64f87f7d","./Math-b53708b3","./RuntimeError-19cb26ba","./ComponentDatatype-8f71e605","./WebGLConstants-95ceb4e9","./GeometryAttribute-7ef2d452","./GeometryAttributes-a356f820","./GeometryPipeline-a588d10d","./AttributeCompression-a99f24b9","./EncodedCartesian3-c36ced29","./IndexDatatype-4e56bcfa","./IntersectionTests-f5111308","./Plane-99b2becd","./WebMercatorProjection-e0329e39"],function(f,b,e,r,t,n,a,o,i,s,c,u,d,m,p,l,y,P,k){"use strict";var C={};return e(function(e,r){for(var t=e.subTasks,n=t.length,a=new Array(n),o=0;o<n;o++){var i=t[o],s=i.geometry,c=i.moduleName;f.defined(c)?(c=function(e){var r=C[e];return f.defined(r)||("object"==typeof exports?C[r]=r=require("Workers/"+e):require(["Workers/"+e],function(e){C[r=e]=e})),r}(c),a[o]=c(s,i.offset)):a[o]=s}return f.when.all(a,function(e){return b.PrimitivePipeline.packCreateGeometryResults(e,r)})})});
