(()=>{"use strict";const e=window.wp.components,t=window.wp.data,o=window.wp.element,i=window.wp.compose,a=window.wp.hooks,d=window.ReactJSXRuntime;let r=!1;class n extends React.Component{render(){const{meta:t,isNew:o,updateHideFeaturedImage:i,getValue:a}=this.props;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.PanelRow,{children:(0,d.jsx)(e.CheckboxControl,{label:cybocfiL10n.featuredImageCheckboxLabel,checked:a(o,t),onChange:e=>{this.setState({isChecked:e}),i(e,t)},__nextHasNoMarginBottom:!0})})})}}const c=(0,i.compose)([(0,t.withSelect)((e=>({meta:{...e("core/editor").getCurrentPostAttribute("meta"),...e("core/editor").getEditedPostAttribute("meta")},isNew:e("core/editor").isEditedPostNew}))),(0,t.withDispatch)((e=>({updateHideFeaturedImage(t,o){t=t?"yes":"",o={...o,cybocfi_hide_featured_image:t},e("core/editor").editPost({meta:o})},getValue(e,t){return e()&&!r?(r=!0,this.updateHideFeaturedImage(cybocfi.hideByDefault,t),cybocfi.hideByDefault):t.cybocfi_hide_featured_image}})))])(n);(0,a.addFilter)("editor.PostFeaturedImage","cybocfi/addControl",(function(e){return function(t){return(0,o.createElement)(o.Fragment,{},null,(0,o.createElement)(e,t),(0,o.createElement)(c))}}))})();