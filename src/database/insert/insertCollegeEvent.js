import Swal from "sweetalert2";
export default async function insertCollegeEvent(collegeEventInfo,seIsLoading,reset) {
  try {
    const res = await fetch(`/api/college-events/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(collegeEventInfo),
    });
    // }
    if (!res.ok) {
      throw new Error("Failed to submit college event");
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