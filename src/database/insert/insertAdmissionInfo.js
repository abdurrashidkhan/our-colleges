import Swal from "sweetalert2";
export default async function insertAdmissionInfo(admissionInfo,seIsLoading,reset) {
  try {
    // C:\projects\digital-marketing-agency\src\app\api\merge-marketing\v1\users\insert-user\[email].js
    const res = await fetch(`/api/admission/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(admissionInfo),
    });
    // }
    // console.log(res)
    if (!res.ok) {
      throw new Error("Failed to insert user info");
    }
    if (res.ok) {
      seIsLoading(false)
      reset()
      Swal.fire("project add success", "", "success");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
