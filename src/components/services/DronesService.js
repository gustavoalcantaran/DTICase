const API_BASE = "http://localhost:5000/drones";

export async function getDrones(){
    const res = await fetch(API_BASE);
    return await res.json();
}

export async function updateDrones(drone){
    const res = await fetch(`${API_BASE}/${drone.id}`,{
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(drone),
    });
    return await res.json();
}