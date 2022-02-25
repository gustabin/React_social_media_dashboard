import React, { useRef, useEffect, useState } from "react";
import "./switch.css";

function Switch() {
  // function handleChange(event) {
  //   console.log(event.target.checked);
  // }
  const ref = useRef(null);
  function handleChange() {
    // console.log(ref.current.checked);
    setChecked(ref.current.checked);
    if (ref.current.checked) {
      document.body.classList.remove("is-light-mode");
      document.body.classList.add("is-dark-mode");
    } else {
      document.body.classList.remove("is-dark-mode");
      document.body.classList.add("is-light-mode");
    }
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setChecked(true);
    }
  }, []);

  const [checked, setChecked] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="form-group">
                <div className="checkbox checbox-switch switch-primary">
                  <label>
                    <input
                      ref={ref}
                      onChange={handleChange}
                      checked={checked}
                      type="checkbox"
                      name=""
                    />
                    Dark mode
                    <span></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Switch;
