import Swal from "sweetalert2";
export default async function insertResearch(research,seIsLoading,reset) {
  try {
    const res = await fetch(`http://localhost:3000/api/research/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(research),
    });
    // }
    if (!res.ok) {
      throw new Error("Failed to submit ");
    }
    if (res.ok) {
      seIsLoading(false)
      reset()
      Swal.fire("Submitted !", "", "success");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}