const form = document.querySelector(".form");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const secondName = document.getElementById("secondName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const agree = document.getElementById("agree").checked;

  const data = {
    name: name,
    secondName: secondName,
    phone,
    email,
    agree,
  };

  try {
    const response = await fetch("https://polinashneider.space/user", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer: Regusik4", 
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Ошибка при отправке данных");
    }

    showNotification("Данные успешно отправлены!");

    form.reset();
  } catch (error) {
    showNotification(`Ошибка: ${error.message}`);
  }
});

function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}