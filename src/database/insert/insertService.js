import Swal from "sweetalert2";
export default async function serviceInsert(service,seIsLoading,reset) {
  try {
    // C:\projects\digital-marketing-agency\src\app\api\merge-marketing\v1\users\insert-user\[email].js
    const res = await fetch(`/api/service/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(service),
    });
    // }
    if (!res.ok) {
      throw new Error("Failed to insert user info");
    }
    if (res.ok) {
      seIsLoading(false)
      reset()
      Swal.fire("service add success", "", "success");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
