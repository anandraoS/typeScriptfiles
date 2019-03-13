import {LikeComponent} from './Likecomponent';
let component = new LikeComponent(10,false);
component.onClick();
component.comment = 'sdf';
console.log('Likes Count :'+ component.likeCount+' isSelected '+component.isSelected+ '  comment: '+ component.comment);