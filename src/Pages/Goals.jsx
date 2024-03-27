import React from 'react'
import Header from '../Components/Header'
import reach from '../assets/reach.png'
import share from '../assets/share.png'
import skill from '../assets/skills.png'
import community from '../assets/community.png'
import awareness from '../assets/awareness.png'
import Section from '../Section'

const Goals = () => {
  return (
    <div className='container'>
        <Header route={'/goals'}/>
        <Section>
            <div className="goals">
                <h1 style={{fontSize: "45px", margin: "0"}}>
                    :الأهداف</h1>
                <p style={{fontSize: "25px"}}> تتمثل مهمتنا في توفير تجربة تعلم شاملة وجذابة للأفراد 
                    الراغبين <br /> في تعلم لغة الإشارة إليك أهدافنا الرئيسية
                    </p>
                    <div className="goals_cont">
                        <div className="goal">
                            <div className='goal_icon'>
                                <img src={reach} alt="" className='goal_img'/>
                            </div>
                            <h2>الوصول</h2>
                            <p className='goal_desc'>نهدف إلى جعل تعلم لغة الإشارة متاحًا للجميع، بغض النظر عن خلفيتهم أو قدراتهم أو موقعهم الجغرافي.
                            من خلال منصتنا سهلة الاستخدام، نسعى لكسر الحواجز وخلق بيئة تعلم شاملة للجميع</p>
                        </div>
                        <div className="goal">
                            <div className='goal_icon'>
                                <img src={share} alt="" className='goal_img'/>
                            </div>
                            <h2>المشاركة</h2>
                            <p className='goal_desc'>هدفنا هو الحفاظ على تحفيز المتعلمين ومشاركتهم طوال رحلتهم في تعلم لغة الإشارة
                                نقدم دروسًا تفاعلية، واختبارات، وأنشطة مصممة لجعل عملية التعلم ممتعة ومجزية</p>
                        </div>
                        <div className="goal">
                            <div className='goal_icon'>
                                <img src={skill} alt="" className='goal_img'/>
                            </div>
                            <h2>تطوير المهارات</h2>
                            <p className='goal_desc'>نحن ملتزمون بمساعدة المتعلمين على تطوير مهاراتهم في التوقيع بفعالية.
                            يغطي منهجنا مجموعة واسعة من المواضيع، من المفردات الأساسية والقواعد إلى تقنيات المحادثة المتقدمة، مما يضمن تقدم المتعلمين بثبات نحو الاستماع الجيد</p>
                        </div>
                        <div className="goal">
                            <div className='goal_icon'>
                                <img src={awareness} alt="" className='goal_img'/>
                            </div>
                            <h2>الوعي الثقافي</h2>
                            <p className='goal_desc'>نعتقد أن تعلم لغة الإشارة يتجاوز مجرد إتقان الإشارات؛ بل يتعلق
                            أيضًا بفهم وتقدير ثقافة الصم ندمج الرؤى الثقافية في دروسنا لتعزيز الفهم والتعاطف بين المتعلمين</p>
                        </div>
                        <div className="goal">
                            <div className='goal_icon'>
                                <img src={community} alt="" className='goal_img'/>
                            </div>
                            <h2>بناء المجتمع</h2>
                            <p className='goal_desc'>نسعى لبناء مجتمع مدعوم للمتعلمين والمعلمين والمهتمين بلغة الإشارة
                                من خلال منتدياتنا وميزاتنا الاجتماعية، نشجع على التعاون والمناقشة والدعم المتبادل بين أعضاء مجتمعنا</p>
                        </div>
                    </div>
            </div>
        </Section>
    </div>
  )
}

export default Goals