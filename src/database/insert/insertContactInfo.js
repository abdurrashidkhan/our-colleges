import Swal from "sweetalert2";
export default async function insertContactInfo(contactInfo,seIsLoading,reset) {
  try {
    const res = await fetch(`/api/contact/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(contactInfo),
    });
    // }
    if (!res.ok) {
      throw new Error("Failed to submit Contact Info");
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