import Swal from "sweetalert2";
export default async function projectInsert(project,seIsLoading,reset) {
  console.log(project)
  try {
    // C:\projects\digital-marketing-agency\src\app\api\merge-marketing\v1\users\insert-user\[email].js
    const res = await fetch(`http://localhost:3000/api/project/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(project),
    });
    // }
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
