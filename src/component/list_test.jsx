import React, { Component } from 'react';
import './style.css';
import Counter from './counter';
// المصفوفه والتعامل معها في رياكت
class Counters extends Component {
    state = { 
        Counters:[
            {id: 1, value:5},
            {id: 2, value:9}, 
            {id: 3, value:4}, 
            {id: 4, value:6} 
        ]
     }
     renderTags(){
        if(this.state.Counters.length === 0) return <p className='ms_error'>this array empaty</p>
                return <div className='list_test_one'> 
        {this.state.Counters.map(item=><div className='items_list_test_one'><Counter key={item.id} value={item.value}>
        {/* props children type:elementHtml 
        حيث يكون في الconsole(props: {children: 'titel'}) 
        */}
        <h4>titel</h4>
        </Counter>
        </div>)} 
        </div>
     }
    render() { 
        return (
            <React.Fragment>
                
                <br></br>
                {this.state.Counters.length === 0 && <p className='ms_error'>this array empaty</p>}
                {this.renderTags()}
            </React.Fragment>
        );
    }
}
 
export default Counters;
