export interface Blog{
    _id? : number;
    title : string;
    content :string;
    tag:string;
    // blogImage : File | string | null;
    blogImage:string;
    createdAt : string;
    featured?:boolean;
    updatedAt?:string;
    size?:number;
}