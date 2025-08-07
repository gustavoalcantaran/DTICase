const API_BASE = "http://localhost:5000/orders";

export async function getOrders(){
    const res = await fetch(API_BASE);
    return await res.json();
}

export async function updateOrder(order){
    const res = await fetch(`${API_BASE}/${order.id}`,{
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    });
    return await res.json();
}

export async function createOrder(order){
    const res = await fetch( API_BASE, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body : JSON.stringify(order),
    });
    return await res.json();
}

export async function deleteOrder(id){
    const res = await fetch(`${API_BASE}/${id}`,{
        method: "DELETE",
    });
    return true;
}

export async function getOrderId(id){
    const res = await fetch(`${API_BASE}/${id}`,{
        method: "GET",
        headers:{
            "Content-Type" : "application/json"
        },
    });
    return await res.json();
}