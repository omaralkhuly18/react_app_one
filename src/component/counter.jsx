import React, { Component } from 'react';
import './style.css';

class Counter extends Component {
    state = {
        count: this.props.counter.value,
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    classRender() {
        let classes = "num1 text-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? <span className='num1'>Zero</span> : count;
    }

    render() {
        return (
            <React.Fragment>
                <h4>Counter #{this.props.counter.id}</h4> 
                <span className={this.classRender()}>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className='btn btn-primary btn-lg'
                >
                    Increment
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className='btn btn-danger btn-sm m-2'
                >
                    Delete
                </button>
            </React.Fragment>
        );
    }
}

export default Counter;


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

// export default Counter;
