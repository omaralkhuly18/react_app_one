import React, { Component } from 'react';
import './style.css'

class counter extends Component {
    state = {
        count: this.props.value,
     }
    render() {
        return (
            <React.Fragment>
                <span  className={ this.classRender() }>{this.formatCount()}</span>
                <button
                // لوضع قيم داخل الداله الموجوده في event الموجود داخل كود الhtml
                 onClick={() => this.handleIncrement({id:1})}
                className='btn btn-primary btn-lg'>
                   Increment
                </button>
            </React.Fragment>
        );
    }
    // 1-fun => When you press the button containing that function, it starts increasing the numbers sequentially.
    // 2-عند الضغط على الزر المحتوى على تلك الداله يبدأ بزيادة الأرقام تسلسليا
    // 3-handleIncrement = () => لأن الthis الموجوده داخل الfun يجب الإشاره إلى أنها منفصله عن الthis الملحقه لل state
    // 4-لوضع قيم داخل الداله الموجوده في event الموجود داخل كود الhtml
    handleIncrement = (product) => {
        // باستخدام setState لتزيد القيمة بمقدار 1 في كل مرة يتم الضغط على الزر.
        this.setState({ count: this.state.count + 1 });
        console.log('product')
    };
    // fun => If the count is zero, it is the primary color, and if it is greater than zero, it changes color.
    // إذا كان الكونت يساوي صفر فيكون باللون الأساسي وإذا زاد عن صفر فيغير اللون.
    classRender() {
        let classes = "num1 text-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    // fun => Convert zero number to word
    // تحويل الصفر رقم إلى كلمه
    formatCount(){
        const{count}=this.state
        return count=== 0?<span className='num1'>Zero</span>:count
    }
}
export default counter;

// الفرق الأساسي هنا:
// استخدام useState:
// بدلاً من استخدام this.state في مكونات الفئات، نستخدم useState لإنشاء متغير count ووظيفة setCount لتحديثه.
//  useState يأخذ القيمة الابتدائية (في هذه الحالة 0) ويعيد المتغير والوظيفة التي تغيره.

// مكونات الدوال بدلاً من الفئات:
// في هذه الطريقة، المكون Counter عبارة عن دالة بدلاً من فئة. هذا يجعل الكود أبسط وأكثر وضوحًا.

// إزالة الحاجة إلى this:
// لم نعد بحاجة إلى استخدام this لأننا نعمل مع متغيرات دوال مباشرة.


// code by ather way
// import React, { useState } from "react";
// import "./style.css";

// function Counter() {
//   // استخدام useState لإنشاء state للعدّاد
//   const [count, setCount] = useState(0);

//   // وظيفة لزيادة قيمة العدّاد
//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   return (
//     <React.Fragment>
//       <span className={classRender()}>{formatCount()}</span>
//       <button onClick={handleIncrement} className="btn btn-primary btn-lg">
//         Increment
//       </button>
//     </React.Fragment>
//   );

//   function classRender() {
//     let classes = "num1 text-";
//     classes += count === 0 ? "warning" : "primary";
//     return classes;
//   }

//   function formatCount() {
//     return count === 0 ? <h5 className="num1">Zero</h5> : count;
//   }
// }

// export def