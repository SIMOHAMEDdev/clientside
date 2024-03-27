import React, {useState} from 'react'
import Header from '../Components/Header'
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";
import Section from '../Section';

const FAQs = () => {
    const [active, setActive] = useState({1: false, 2: false, 3: false, 4: false, 5: false})
  return (
    <div className='container'>
        <Header route={'/faqs'}/>
        <Section>
            <div className="faqs">
                <h1 style={{fontSize: "30px", margin: "0"}}>
                    :الأسئلة</h1>
                <p style={{fontSize: "25px"}}>فيما يلي بعض الأسئلة التي قد تكون 
                لديكم حول منصتنا وخدماتنا</p>
                <div className="questions">
                    <div className="question">
                        <p style={{borderBottom: '1px solid',
                    display: 'flex',flexDirection: "row-reverse", justifyContent: "space-between"}}>ما هي لغة الإشارة؟{!active[1]? <BsFillPatchPlusFill className="question_icon" onClick={()=>{setActive((etc)=>{return {...etc, 1: !active[1]}})}}/> : 
                    <BsFillPatchMinusFill className="question_icon" onClick={()=>{setActive((etc)=>{return {...etc, 1: !active[1]}})}}/>}</p>
                        {active[1] && (<p className="answer">لغة الإشارة هي لغة تستخدم للتواصل بين الأشخاص الصم والسامعين. تعتمد على استخدام
                        اليدين والتعبيرات الوجهية والحركات الجسدية</p>)}
                    </div>
                    <div className="question">
                        <p style={{borderBottom: '1px solid',
                    display: 'flex',flexDirection: "row-reverse", justifyContent: "space-between"}}>ما هو هدف منصتك لتعلم لغة الإشارة؟
                    {!active[2]? <BsFillPatchPlusFill className="question_icon" onClick={()=>{setActive((etc)=>{return {...etc, 2: !active[2]}})}}/> : 
                    <BsFillPatchMinusFill className="question_icon" onClick={()=>{setActive((etc)=>{return {...etc, 2: !active[2]}})}}/>} </p>
                        {active[2] && (<p className="answer">
                            يهدف منصتنا إلى توفير بيئة تعلم محفزة وشاملة لأولئك الذين يرغبون في تعلم لغة الإشارة. نحن نسعى لتمكين الأفراد من 
                            اكتساب مهارات تواصل فعّالة وفهم أعمق لثقافة الصم</p>)}
                    </div>
                    <div className="question">
                        <p style={{borderBottom: '1px solid',
                    display: 'flex',flexDirection: "row-reverse", justifyContent: "space-between"}}>هل يمكنني المساهمة بالمحتوى أو تقديم اقتراحات؟
                    {!active[3]? <BsFillPatchPlusFill className="question_icon" onClick={()=>{setActive((etc)=>{return {...etc, 3: !active[3]}})}}/> : 
                    <BsFillPatchMinusFill className="question_icon" onClick={()=>{setActive((etc)=>{return {...etc, 3: !active[3]}})}}/>}</p>
                        {active[3] && (<p className="answer">نحن نرحب بالمساهمات والاقتراحات من مجتمعنا. إذا كان لديكم مواد تعليمية مفيدة
                        أو اقتراحات لتحسين منصتنا، فلا تترددوا في الاتصال بفريق الدعم لمناقشة كيفية المساهمة</p>)}
                    </div>
                    <div className="question">
                        <p style={{borderBottom: '1px solid',
                    display: 'flex',flexDirection: "row-reverse", justifyContent: "space-between"}}>هل يتوفر دعم فني في حالة وجود مشكلات؟
                    {!active[4]? <BsFillPatchPlusFill className="question_icon" onClick={()=>{setActive((etc)=>{return {...etc, 4: !active[4]}})}}/> : 
                    <BsFillPatchMinusFill className="question_icon" onClick={()=>{setActive((etc)=>{return {...etc, 4: !active[4]}})}}/>}</p>
                        {active[4] && (<p className="answer">نعم، يمكنكم الاتصال بفريق الدعم الفني لدينا في أي وقت
                        إذا واجهتم أي مشكلة أو كانت لديكم أي استفسارات</p>)}
                    </div>
                    <div className="question">
                        <p style={{borderBottom: '1px solid',
                    display: 'flex',flexDirection: "row-reverse", justifyContent: "space-between"}}>هل يمكنني الوصول إلى المنصة من أي مكان؟
                    {!active[5]? <BsFillPatchPlusFill className="question_icon" onClick={()=>{setActive((etc)=>{return {...etc, 5: !active[5]}})}}/> : 
                    <BsFillPatchMinusFill className="question_icon" onClick={()=>{setActive((etc)=>{return {...etc, 5: !active[5]}})}}/>}</p>
                        {active[5] && (<p className="answer">نعم، يمكنك الوصول إلى منصتنا عبر الإنترنت من أي جهاز يتصل بالإنترنت،
                        مثل الكمبيوتر المحمول أو الهاتف الذكي</p>)}
                    </div>
                </div>
            </div>
        </Section>
    </div>
  )
}

export default FAQs