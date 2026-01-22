const btn = document.getElementById("btn");
const status = document.getElementById("status");

btn.onclick = () => {
  status.innerText = "Status: JavaScript jalan ✅";
  console.log("JS berhasil dijalankan");
};
