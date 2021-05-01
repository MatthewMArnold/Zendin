// Needs to activated by the menu
AFRAME.registerComponent("audio-button", {
    schema: {
      title: { type: "string", default: ""},
      img: { type: "selector", default: "#meditation-img" }
    },
    init: function () {
      let el = this.el;
      let data = this.data;
  
      // Dimensions
      this.barWidth = 1;
  
      // Text
      this.text = document.createElement("a-entity");
      this.text.setAttribute("position", "0.3 0.15 0");
      this.text.setAttribute("text", {
        value: data.title,
        align: "left",
        shader: "msdf",
      });
  
      // Container
      //this.container = document.createElement("a-image");
      //this.container.setAttribute("src", data.img);

      this.container = document.createElement("a-entity");
      this.container.setAttribute("class", "container");
      this.container.setAttribute("material", "src", data.img);
      this.container.setAttribute("mixin", "thumbnail");
  
      el.appendChild(this.text);
      el.appendChild(this.container);
  
      // Handlers
      this.onClick = this.onClick.bind(this);
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
  
      // Listeners
      this.container.addEventListener("click", this.onClick);
      this.container.addEventListener("mouseenter", this.onMouseEnter);
      this.container.addEventListener("mouseleave", this.onMouseLeave);
    },
  
    remove: function () {
      this.container.removeEventListener("click", this.onClick);
      this.container.removeEventListener("mouseenter", this.onMouseEnter);
      this.container.removeEventListener("mouseleave", this.onMouseLeave);
    },
  
    onClick: function (evt) {
      this.el.sceneEl.emit(`audio-changed`, {audio_id: this.el.id});
      console.log(`${this.el.id}-changed`);
    },
  
    onMouseEnter: function() {
      
    },
  
    onMouseLeave: function() {
      
    },
  });
  