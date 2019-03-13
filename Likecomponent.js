"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likeCount, _isSelected, _comment) {
        this._likeCount = _likeCount;
        this._isSelected = _isSelected;
        this._comment = _comment;
    }
    Object.defineProperty(LikeComponent.prototype, "likeCount", {
        // get LikeCount(){return this.likeCount;}
        get: function () {
            return this._likeCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        // get IsSelected(){return this.isSelected;}
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "comment", {
        get: function () {
            return this._comment;
        },
        set: function (vale) {
            this._comment = vale;
        },
        enumerable: true,
        configurable: true
    });
    LikeComponent.prototype.onClick = function () {
        this._likeCount += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
