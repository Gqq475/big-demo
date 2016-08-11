import React, { PropTypes } from 'react'
import {Card,  CardMedia, CardTitle} from 'material-ui/Card';
class Work extends React.Component {
  render () {
    return(
      <div className='work-wrap'>
        <Card className='work-card'>
           <CardMedia
             overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
             >
              <img src="https://github.com/Gqq475/deploy/blob/master/src/img/11.jpg?raw=true" />
           </CardMedia>
         </Card>
         <Card className='work-card'>
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
               <img src="https://github.com/Gqq475/deploy/blob/master/src/img/11.jpg?raw=true" />
            </CardMedia>
          </Card>
          <Card className='work-card'>
             <CardMedia
               overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
               >
                <img src="https://github.com/Gqq475/deploy/blob/master/src/img/11.jpg?raw=true" />
             </CardMedia>
           </Card>
           <Card className='work-card'>
              <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                 <img src="https://github.com/Gqq475/deploy/blob/master/src/img/11.jpg?raw=true" />
              </CardMedia>
            </Card>
            <Card className='work-card'>
               <CardMedia
                 overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                 >
                  <img src="https://github.com/Gqq475/deploy/blob/master/src/img/11.jpg?raw=true" />
               </CardMedia>
             </Card>
             <Card className='work-card'>
                <CardMedia
                  overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                  >
                   <img src="https://github.com/Gqq475/deploy/blob/master/src/img/11.jpg?raw=true" />
                </CardMedia>
              </Card>
       </div>
            )
          }
}

export default Work;
