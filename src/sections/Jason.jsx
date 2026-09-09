import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Jason = () => {
  useGSAP(() => {
    gsap.set('.jason', { marginTop: '-80vh' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.jason',
        start: 'top 90%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.jason .img-box', {
      scrollTrigger: {
        trigger: '.jason',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -300, duration: 1, ease: 'power1.inOut'
    }, '<')
  })

  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>ELECTRO TEKKEN</h1>
        <h2>Electro Tekken transforms real-world movements into high-precision gameplay.</h2>
        <p>Using motion tracking and adaptive machine learning, your physical punches, kicks, and combos control the action for an immersive combat experience.</p>

        <div className="jason-2">
          <img src="/img/taken2.png" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <img src="/img/jason-1.webp" />
        </div>
        <div className="jason-3">
          <img src="/img/tekn1.jpg" />
        </div>
      </div>
    </section>
  )
}

export default Jason