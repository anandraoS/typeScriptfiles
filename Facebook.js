"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Likecomponent_1 = require("./Likecomponent");
var component = new Likecomponent_1.LikeComponent(10, false);
component.onClick();
component.comment = 'sdf';
console.log('Likes Count :' + component.likeCount + ' isSelected ' + component.isSelected + '  comment: ' + component.comment);
