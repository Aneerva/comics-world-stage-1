AFRAME.registerComponent("comics", {
    init: function () {
      this.comicsContainer = this.el;
        },

<a-scene background="color:#90caf95">
    <!-- Ground -->
    <a-plane
    id="ground"
    color="#78989c"
    width="200"
    height="100"
    rotation="-90 0 0"
    ></a-plane>
<!-- Poster Container -->
<a-entity Id="posters container" comics pasters> </a-entity>
<a-camera id="camera" wasd-controls="enabled:false;" position="0 10 20">
</a-camera>
</a-scene>
}