      const fs = document.getElementById("fullscreen");
      const input = document.getElementById("input");

      input.onfocus = () => {
        fs.classList.add("keyboard");
      };

      input.onblur = () => {
        fs.classList.remove("keyboard");
      };
