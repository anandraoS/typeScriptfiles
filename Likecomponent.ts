export class LikeComponent{

    constructor(private _likeCount: number, private _isSelected:boolean, private _comment?:string){
    }
    // get LikeCount(){return this.likeCount;}
    get likeCount()
    {
        return this._likeCount;
    }
     // get IsSelected(){return this.isSelected;}
    get isSelected()
    {
    return this._isSelected;
    }
    get comment()
    {
       return this._comment;
    }
    set comment(vale)
    {
       this._comment = vale;  
    }
    onClick()
    {
        this._likeCount += (this._isSelected)? -1:1 ;
        this._isSelected = !this._isSelected; 
    } .
}
