"use client"
export default function WishlistButton(){
    const handleAddToWishlist=async()=>{
        const res=await fetch("/api/wishlist",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                userId:"user123",
                items:[
                    {productId:"p001", addedAt:new Date().toISOString()},
                ],
            }),
        })
        const result=await res.json();
        if(result.success){
            alert("Wishlist saved!");
        }else{
            alert("Failed to save wishlist");
        }
    };
    return(
        <button onClick={handleAddToWishlist} className="px-4 py-2 bg-blue-600 text-white rounded">
            Add to Wishlist
        </button>
    )
}