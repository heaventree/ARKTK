import {ArchitectElement} from '../architect-element';
import {hasClass} from '../../utils/has-class';
import {AccountBoxIcon} from '@common/icons/material/AccountBox';

const template = `<div class="user-profile">
<div class="col-md-8 col-lg-6">
<div class="well profile">
<div class="col-sm-12">
<div class="col-xs-12 col-sm-8">
<h2>Nicole Pearson</h2>
<p><strong>About: </strong> Web Designer / UI. </p>
<p><strong>Hobbies: </strong> Read, out with friends, listen to music, draw and learn new things. </p>
<p><strong>Skills: </strong>
<span class="label label-success">html5</span>
<span class="label label-success">css3</span>
<span class="label label-success">jquery</span>
<span class="label label-success">bootstrap3</span>
</p>
</div>
<div class="col-xs-12 col-sm-4 text-center">
<figure>
<img src="/images/builder/placeholder.svg" alt="" class="img-circle img-responsive">
<figcaption class="ratings">
<p>Ratings
<a href="#">
<span class="fa fa-star"></span>
</a>
<a href="#">
<span class="fa fa-star"></span>
</a>
<a href="#">
<span class="fa fa-star"></span>
</a>
<a href="#">
<span class="fa fa-star"></span>
</a>
<a href="#">
<span class="fa fa-star-o"></span>
</a>
</p>
</figcaption>
</figure>
</div>
</div>
<div class="col-xs-12 divider text-center">
<div class="col-xs-12 col-sm-4 emphasis">
<h2><strong> 20,7K </strong></h2>
<p><small>Followers</small></p>
<button class="btn btn-success btn-block"><span class="fa fa-plus-circle"></span> Follow </button>
</div>
<div class="col-xs-12 col-sm-4 emphasis">
<h2><strong>245</strong></h2>
<p><small>Following</small></p>
<button class="btn btn-info btn-block"><span class="fa fa-user"></span> View Profile </button>
</div>
<div class="col-xs-12 col-sm-4 emphasis">
<h2><strong>43</strong></h2>
<p><small>Snippets</small></p>
<button class="btn btn-primary btn-block"><span class="fa fa-gears"></span> Options </button>
</div>
</div>
</div>
</div>
</div>`;

const style = `
.profile {
    min-height: 355px;
    display: inline-block;
}
.profile figcaption.ratings{
    margin-top:20px;
}
.profile figcaption.ratings a
{    color:#f1c40f;
    font-size:11px;
}
.profile figcaption.ratings a:hover
{    color:#f39c12;
    text-decoration:none;
}
.profile .divider {
    border-top:1px solid rgba(0,0,0,0.1);
}
.profile .emphasis {
    border-top: 4px solid transparent;
}
.profile .emphasis:hover {
    border-top: 4px solid #1abc9c;
}
.profile .emphasis h2 {
    margin-bottom:0;
}
.profile .label {
    font-weight: bold;
    padding: 3px 6px;
    font-size: 11.5px;
}
`;

export class UserProfileEl extends ArchitectElement {
  name = 'user profile';
  contentCategories = ['flow'];
  html = template;
  css = style;
  allowedContent = ['flow'];
  category = 'components';
  icon = (<AccountBoxIcon />);
  specificity = 3;
  hiddenClasses = ['profile'];
  matcher(node: HTMLElement) {
    return hasClass(node, 'user-profile');
  }
}
