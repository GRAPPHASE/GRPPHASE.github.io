document.addEventListener('DOMContentLoaded', function () {
    console.log("Logo & Identity page loaded");
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".folio-image", {
    opacity: 1,
    y: 0,
    scale: 1, 
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".parallax-image",
        start: "top 80%", // เริ่มแสดงผลเมื่อถึง 80% ของ viewport
        end: "top 50%",   // สิ้นสุดแอนิเมชันเมื่อถึง 50%
        scrub: true       // ทำให้แอนิเมชันราบรื่นตามการเลื่อนเมาส์
    }
});
