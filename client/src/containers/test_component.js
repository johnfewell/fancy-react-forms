import React, { Component } from 'react'
import { Button, Dimmer, Image, Segment } from 'semantic-ui-react'
import Observer from 'react-intersection-observer'

export default class DimmerExampleBlurringInverted extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })
  handleChange (inView) {
   console.log('handle change called:', inView)
   inView ? this.handleHide() : this.handleShow()

 }

  render() {
    const { active } = this.state

    return (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu lacus ex. Mauris augue mi, commodo sit amet urna sit amet, tristique congue felis. Mauris semper, leo at ornare auctor, risus risus varius nulla, ac interdum ante orci volutpat lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vel lectus lorem. Mauris ut volutpat odio. Sed dictum, ex et posuere placerat, nibh velit mattis urna, sed pretium neque purus in sem. Nam ultricies nunc nec urna vestibulum, quis dapibus leo tempus. Nunc turpis libero, vestibulum at dignissim in, volutpat vitae leo. Vivamus vel malesuada magna. Nullam sollicitudin arcu mollis erat vulputate condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc felis mi, convallis in feugiat sit amet, porta facilisis purus. Proin hendrerit quam mi, sed pretium massa dignissim quis. Maecenas in nibh sit amet lacus imperdiet fermentum.

        Aliquam nibh velit, rhoncus porttitor diam nec, mollis vehicula nisi. Mauris ac quam vel nulla mollis iaculis. Donec in nibh augue. Ut eu neque eget elit vulputate aliquet ac nec nulla. Cras ultrices fringilla interdum. Donec laoreet rutrum lacus, in venenatis nunc pellentesque maximus. Praesent egestas arcu et ipsum tristique, vitae vulputate erat dapibus. Duis viverra sed lectus et porta. Sed at imperdiet arcu, eu condimentum sapien. Curabitur tempus justo et erat faucibus, in convallis turpis vehicula.

        Nunc sed viverra enim, sed ultricies risus. Aenean ac eros quis augue tempor bibendum. Cras vitae nibh auctor massa scelerisque tincidunt vitae quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus id pulvinar tellus. Duis condimentum consectetur turpis. Fusce a augue at felis gravida egestas. Vestibulum venenatis iaculis justo, sit amet posuere libero volutpat eget.

        Vivamus posuere massa non turpis feugiat porta vel in tellus. Sed rhoncus malesuada semper. Sed facilisis gravida libero, a tincidunt neque sodales in. Vivamus lacinia auctor diam at dignissim. Donec consectetur sapien a neque iaculis, ac tempus magna pellentesque. Maecenas interdum arcu vel odio suscipit, eget congue lorem blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur egestas venenatis. Curabitur sed nunc euismod, convallis ipsum eu, laoreet arcu. Quisque in dui ante. Maecenas molestie tincidunt eros, id varius ligula interdum quis.

        Sed id varius eros. Nam hendrerit, leo ultricies cursus pharetra, quam sapien tristique elit, id pharetra magna erat eu ligula. Aliquam eu efficitur dui. Proin tincidunt magna eget rhoncus mattis. Pellentesque at lacinia risus. Curabitur luctus sem nisl, at hendrerit nisi efficitur vitae. Sed ac magna et nibh finibus ornare eu vel tellus. Nunc lobortis metus urna, et facilisis mauris fringilla vel. Ut eget tellus et odio facilisis convallis ut sed purus. Fusce eget viverra lectus. Suspendisse scelerisque tortor quis orci mollis fringilla. Aenean sed blandit mi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu lacus ex. Mauris augue mi, commodo sit amet urna sit amet, tristique congue felis. Mauris semper, leo at ornare auctor, risus risus varius nulla, ac interdum ante orci volutpat lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vel lectus lorem. Mauris ut volutpat odio. Sed dictum, ex et posuere placerat, nibh velit mattis urna, sed pretium neque purus in sem. Nam ultricies nunc nec urna vestibulum, quis dapibus leo tempus. Nunc turpis libero, vestibulum at dignissim in, volutpat vitae leo. Vivamus vel malesuada magna. Nullam sollicitudin arcu mollis erat vulputate condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc felis mi, convallis in feugiat sit amet, porta facilisis purus. Proin hendrerit quam mi, sed pretium massa dignissim quis. Maecenas in nibh sit amet lacus imperdiet fermentum.

        Aliquam nibh velit, rhoncus porttitor diam nec, mollis vehicula nisi. Mauris ac quam vel nulla mollis iaculis. Donec in nibh augue. Ut eu neque eget elit vulputate aliquet ac nec nulla. Cras ultrices fringilla interdum. Donec laoreet rutrum lacus, in venenatis nunc pellentesque maximus. Praesent egestas arcu et ipsum tristique, vitae vulputate erat dapibus. Duis viverra sed lectus et porta. Sed at imperdiet arcu, eu condimentum sapien. Curabitur tempus justo et erat faucibus, in convallis turpis vehicula.

        Nunc sed viverra enim, sed ultricies risus. Aenean ac eros quis augue tempor bibendum. Cras vitae nibh auctor massa scelerisque tincidunt vitae quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus id pulvinar tellus. Duis condimentum consectetur turpis. Fusce a augue at felis gravida egestas. Vestibulum venenatis iaculis justo, sit amet posuere libero volutpat eget.

        Vivamus posuere massa non turpis feugiat porta vel in tellus. Sed rhoncus malesuada semper. Sed facilisis gravida libero, a tincidunt neque sodales in. Vivamus lacinia auctor diam at dignissim. Donec consectetur sapien a neque iaculis, ac tempus magna pellentesque. Maecenas interdum arcu vel odio suscipit, eget congue lorem blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur egestas venenatis. Curabitur sed nunc euismod, convallis ipsum eu, laoreet arcu. Quisque in dui ante. Maecenas molestie tincidunt eros, id varius ligula interdum quis.

        Sed id varius eros. Nam hendrerit, leo ultricies cursus pharetra, quam sapien tristique elit, id pharetra magna erat eu ligula. Aliquam eu efficitur dui. Proin tincidunt magna eget rhoncus mattis. Pellentesque at lacinia risus. Curabitur luctus sem nisl, at hendrerit nisi efficitur vitae. Sed ac magna et nibh finibus ornare eu vel tellus. Nunc lobortis metus urna, et facilisis mauris fringilla vel. Ut eget tellus et odio facilisis convallis ut sed purus. Fusce eget viverra lectus. Suspendisse scelerisque tortor quis orci mollis fringilla. Aenean sed blandit mi.</p>
      <Observer onChange={(inView) => {this.handleChange(inView)}} threshold='.9999' >
        <Dimmer.Dimmable as={Segment} blurring dimmed={active}>
          <Dimmer active={active} inverted onClickOutside={this.handleHide} />

          <p>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </p>
          <p>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </p>
        </Dimmer.Dimmable>
        </Observer>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu lacus ex. Mauris augue mi, commodo sit amet urna sit amet, tristique congue felis. Mauris semper, leo at ornare auctor, risus risus varius nulla, ac interdum ante orci volutpat lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vel lectus lorem. Mauris ut volutpat odio. Sed dictum, ex et posuere placerat, nibh velit mattis urna, sed pretium neque purus in sem. Nam ultricies nunc nec urna vestibulum, quis dapibus leo tempus. Nunc turpis libero, vestibulum at dignissim in, volutpat vitae leo. Vivamus vel malesuada magna. Nullam sollicitudin arcu mollis erat vulputate condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc felis mi, convallis in feugiat sit amet, porta facilisis purus. Proin hendrerit quam mi, sed pretium massa dignissim quis. Maecenas in nibh sit amet lacus imperdiet fermentum.

        Aliquam nibh velit, rhoncus porttitor diam nec, mollis vehicula nisi. Mauris ac quam vel nulla mollis iaculis. Donec in nibh augue. Ut eu neque eget elit vulputate aliquet ac nec nulla. Cras ultrices fringilla interdum. Donec laoreet rutrum lacus, in venenatis nunc pellentesque maximus. Praesent egestas arcu et ipsum tristique, vitae vulputate erat dapibus. Duis viverra sed lectus et porta. Sed at imperdiet arcu, eu condimentum sapien. Curabitur tempus justo et erat faucibus, in convallis turpis vehicula.

        Nunc sed viverra enim, sed ultricies risus. Aenean ac eros quis augue tempor bibendum. Cras vitae nibh auctor massa scelerisque tincidunt vitae quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus id pulvinar tellus. Duis condimentum consectetur turpis. Fusce a augue at felis gravida egestas. Vestibulum venenatis iaculis justo, sit amet posuere libero volutpat eget.

        Vivamus posuere massa non turpis feugiat porta vel in tellus. Sed rhoncus malesuada semper. Sed facilisis gravida libero, a tincidunt neque sodales in. Vivamus lacinia auctor diam at dignissim. Donec consectetur sapien a neque iaculis, ac tempus magna pellentesque. Maecenas interdum arcu vel odio suscipit, eget congue lorem blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur egestas venenatis. Curabitur sed nunc euismod, convallis ipsum eu, laoreet arcu. Quisque in dui ante. Maecenas molestie tincidunt eros, id varius ligula interdum quis.

        Sed id varius eros. Nam hendrerit, leo ultricies cursus pharetra, quam sapien tristique elit, id pharetra magna erat eu ligula. Aliquam eu efficitur dui. Proin tincidunt magna eget rhoncus mattis. Pellentesque at lacinia risus. Curabitur luctus sem nisl, at hendrerit nisi efficitur vitae. Sed ac magna et nibh finibus ornare eu vel tellus. Nunc lobortis metus urna, et facilisis mauris fringilla vel. Ut eget tellus et odio facilisis convallis ut sed purus. Fusce eget viverra lectus. Suspendisse scelerisque tortor quis orci mollis fringilla. Aenean sed blandit mi.</p>
      </div>
    )
  }
}
