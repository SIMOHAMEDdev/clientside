import React from 'react'
import Header from '../Components/Header'
import back from '../assets/illus.png'
import Section from '../Section'

const About = () => {
  return (
    <div className='container'>
      <div>
        <Header route={'/about'}/>
        <Section>
          <div className="_container">
            <div className="about">
              <div>
                <img src={back} alt="" style={{height: "450px", margin: "10px 0 0 10px"}}/>
              </div>
              <div className="about_us">
                <p className='about_text'>مرحبًا بكم في إشارة، الوجهة الأولى لتعلم لغة الإشارة عبر الإنترنت. 
                  نحن أكثر من موقع ويب، نحن مبادرة تتميز بتواجد مجتمع متحد
                  يهدف إلى إدخال  جمالية لغة <br />.الإشارة إلى الواجهة الرقمية                </p>
                <p className='about_text'>بصفتنا روادًا في تعليم لغة الإشارة عبر الإنترنت، فإن مهمتنا بسيطة،
                  جعل عملية التعلم متاحة وشيِّقة وممتعة للجميع<br />وراء إشارة يقف فريق من الأفراد الملتزمين بغاية مشتركة
                    وهي كسر الحواجز وتعزيز الفهم من خلال 
                    لغة الإشارة</p>
                <p className='about_text'>

                إنضم إلينا ونحن ننطلق في هذه الرحلة الرائدة، حيث يلتقي الابتكار بالإندما
                  ج، وكل حركة يد تصبح خطوة نحو عالم متصل بشكل أفضل، معًا دعونا نفتح الطريق لمستقبل يحتفل فيه بلغة الإشارة ولا يعتبرها مجرد مادة للتعلم. مرحبًا بكم في بداية شيء استثنائي

                </p>
              </div>
              <div className="quotes">
              <p className="quote1 quote">في عالم لا تصله الكلمات، تتحدث الأيادي
              بلغة تعبر عن أعمق المشاعر وأبسط الأفكار</p>
              <p className="quote1 quote">عندما تخلوا الكلمات عن الصوت، تنطق الأيادي بحكايات الروح</p>
                <p className="quote1 quote">لغة الإشارة تعلمنا أن التواصل ليس حكراً على الصوت، بل ينبغي أن يكون موجوداً
                في كل تقاطع للحياة</p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}

export default About