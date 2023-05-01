---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Structured Kernel Estimation for Photon-Limited Deconvolution
layout: default
---
<link rel="stylesheet" href="./css/slideshow.css">
<div style="width:100%;padding-bottom:10%;">

<div style="float:left;width:64%">
<h1>Structured Kernel Estimation for Photon-Limited Deconvolution</h1>
<h3>Yash Sanghvi, Zhiyuan Mao, Stanley H. Chan</h3>
</div>
<div style="float:left;width:35%">
		<img src="assets/cvpr.jpg" alt="drawing" style="width:100%;padding:5%;"/>
</div>
</div>
<center>
<div style="width:100%;padding-bottom:20%;">
	<div style="float:left;width:33%;">
		<a href="https://arxiv.org/abs/2303.03472">
		<img src="assets/arxiv-logo.png" alt="drawing" style="width:20%;padding:5%;"/>
		<h2>Arxiv</h2>
	</a>
	</div>
	<div style="float:left;width:33%;">
		<a href="https://www.youtube.com/watch?v=jqCUJb3BUUo">
		<img src="assets/video-logo.png" alt="drawing" style="width:20%;padding:5%;"/>
		<h2>Video (5 min.)</h2>
	</a>
	</div>
	<div style="float:left;width:33%;">
		<a href="https://github.com/sanghviyashiitb/poisson-deblurring">
		<img src="assets/github.png" alt="drawing" style="width:20%;padding:5%;"/>
		<h2>Code</h2>
	</a>
	</div>
</div>
</center>

<div style="width:100%;padding-bottom:40px;">
<center>
<div style="float:left;width:40%;">
<img src="assets/key_points_to_kernel.png" alt="drawing" style="width:95%;padding:1%;"/>
</div>
<div style="float:left;width:59%;">
<img src="assets/iterative_scheme.png" alt="drawing" style="width:95%;padding:1%;"/>
</div>
<span style="font-size: 16px">(Left) Proposed low-dimensional representation for the blur kernel estimation (Right) Proposed iterative method using a differentiable non-blind solver <b>F(.)</b> and low-dimensional kernel representation <b>T(.)</b></span>
</center>	
</div>

<h2>Abstract</h2>
<span style="font-size:16px;"> Images taken in a low light condition with the presence of camera shake suffer from motion blur and photon shot noise. State-of-the-art restoration networks perform well  but are largely limited to well-illuminated scenes and their performance drops significantly when shot noise is strong.<br>
In this paper, we propose a new blur estimation technique customized for photon-limited conditions. The proposed method employs a gradient-based backpropagation method to estimate the blur kernel. By modeling the blur kernel using a low-dimensional representation with the key points on the motion trajectory, we significantly reduce the search space and improve regularity of the kernel estimation problem. When plugged into the iterative framework, our novel low-dimensional representation provides improved kernel estimates and hence significantly better deconvolution performance when compared to end-to-end trained networks.
</span>

<center>
<div style="width:100%;padding-bottom:35%;">
<div style="float:left;width:25%;">
	<img src="assets/results/y.png" alt="drawing" style="width:90%;padding-bottom:2%;"/>
	<span style="font-size:20px;">Blurred and Noisy</span>
</div>
<div style="float:left;width:25%;">
	<img src="assets/results/mpr.png" alt="drawing" style="width:90%;padding-bottom:2%;"/>
	<span style="font-size:20px;">MPR-Net</span>
</div>
<div style="float:left;width:25%;">
	<img src="assets/results/ours.png" alt="drawing" style="width:90%;padding-bottom:2%;"/>
	<span style="font-size:20px;">Ours</span>
</div>
<div style="float:left;width:25%;">
	<img src="assets/results/gt.png" alt="drawing" style="width:90%;padding-bottom:1%;"/>
	<span style="font-size:20px;">Ground-Truth</span>
</div>
<br>
</div>
</center>

<iframe src="https://drive.google.com/file/d/1gxtwkJcY25rF1flAKXfU--eMxcQI76dF/preview" width="640" height="480" allow="autoplay"></iframe>

<h2>Citation</h2>
 ```
@article{sanghvi2023structured,
  title={Structured Kernel Estimation for Photon-Limited Deconvolution},
  author={Sanghvi, Yash and Mao, Zhiyuan and Chan, Stanley H},
  journal={arXiv preprint arXiv:2303.03472},
  year={2023}
}
 ```

<div class="footer-content" style="--maxw:100px; width: 100%; --px:100px">
    <h4>Dataset, site maintained by <a href="https://github.com/sanghviyashiitb" target="_blank">@sanghviyashiitb</a>, Brought to you by the <a href="https://engineering.purdue.edu/ChanGroup/">i2Lab</a> at Purdue University.</h4>
    <h4>PDF, Dataset, Github icons created by <a href="https://www.flaticon.com/free-icons/github" title="github icons">Flaticon</a>, Minimal theme by <a href="https://github.com/orderedlist">orderedlist</a></h4>
</div> 



