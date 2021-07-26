/**
 * Generic input field component bound with Formik Form.
 */
 import PropTypes from "prop-types"
 import { useState } from "react";
 import { useField } from "formik"
 
 const Field = (props) => {
     const [field, meta] = useField(props)
     const [didFocus, setDidFocus] = useState(false);
     const handleFocus = () => setDidFocus(true);
     const showFeedback =
         (!!didFocus && field.value?.trim().length > 1) || meta.touched;
     const className = `field ${showFeedback ? (meta.error ? 'field--invalid' : 'field--valid') : ''}`;
 
     return (
         <div className="field-contianer">
             <div className={className}>
                 <input
                     {...props}
                     {...field}
                     onFocus={handleFocus}
                     aria-describedby={`${props.id}-feedback`}
                 />
             </div>
             {
                 showFeedback ? (
                     <div className="input-feedback" aria-live="polite" id={`${props.id}-feedback`}><span className="input-feedback--error">{meta.error}</span></div>
                 ) : null
             }
         </div>
     )
 }
 
 export default Field;
 
 Field.propTypes = {
     icon: PropTypes.bool
 }