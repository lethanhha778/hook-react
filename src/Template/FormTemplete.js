import { Fragment } from 'react';
import { Route } from 'react-router-dom';


export const FormTemplate = (props) => {
    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <div className='container py-2'>
                <div className="row">
                    <div className="col-8">
                        <img className='img-fluid' src="https://source.unsplash.com/random?japan" alt="" />
                    </div>
                    <div className="col-4">
                        <props.component {...propsRoute} />
                    </div>
                </div>
            </div>
        </Fragment>
    }
    } />
}