"use strict";(self.webpackChunkpaulohernane_me=self.webpackChunkpaulohernane_me||[]).push([[4124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,d=m["".concat(o,".").concat(p)]||m[p]||h[p]||r;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={id:"k-means-clustering",title:"K-Means Clustering",tags:["Data Science","Machine Learning","Clustering","K-Means","Unsupervised Learning","Scikit-Learn","Python","Expectation\u2013Maximization","EM Algorithm","Elbow Method","Silhouette Analysis"]},l="K-Means Clustering",s={unversionedId:"data-science/machine-learning/k-means-clustering",id:"data-science/machine-learning/k-means-clustering",title:"K-Means Clustering",description:"K-Means Clustering is an unsupervided machine learning model, that belongs to the class of clustering algotithms.",source:"@site/my-brain/data-science/machine-learning/k-means-clustering.md",sourceDirName:"data-science/machine-learning",slug:"/data-science/machine-learning/k-means-clustering",permalink:"/my-brain/data-science/machine-learning/k-means-clustering",draft:!1,tags:[{label:"Data Science",permalink:"/my-brain/tags/data-science"},{label:"Machine Learning",permalink:"/my-brain/tags/machine-learning"},{label:"Clustering",permalink:"/my-brain/tags/clustering"},{label:"K-Means",permalink:"/my-brain/tags/k-means"},{label:"Unsupervised Learning",permalink:"/my-brain/tags/unsupervised-learning"},{label:"Scikit-Learn",permalink:"/my-brain/tags/scikit-learn"},{label:"Python",permalink:"/my-brain/tags/python"},{label:"Expectation\u2013Maximization",permalink:"/my-brain/tags/expectation-maximization"},{label:"EM Algorithm",permalink:"/my-brain/tags/em-algorithm"},{label:"Elbow Method",permalink:"/my-brain/tags/elbow-method"},{label:"Silhouette Analysis",permalink:"/my-brain/tags/silhouette-analysis"}],version:"current",frontMatter:{id:"k-means-clustering",title:"K-Means Clustering",tags:["Data Science","Machine Learning","Clustering","K-Means","Unsupervised Learning","Scikit-Learn","Python","Expectation\u2013Maximization","EM Algorithm","Elbow Method","Silhouette Analysis"]},sidebar:"myBrainSidebar",previous:{title:"Machine Learning",permalink:"/my-brain/data-science/machine-learning/"},next:{title:"Database",permalink:"/my-brain/databases/"}},o={},c=[{value:"Clustering Algorithms",id:"clustering-algorithms",level:2},{value:"K-Means",id:"k-means",level:2},{value:"Expectation\u2013Maximization (EM) Algorithm",id:"expectationmaximization-em-algorithm",level:2},{value:"How to choose the number of clusters",id:"how-to-choose-the-number-of-clusters",level:2},{value:"Elbow Method",id:"elbow-method",level:3},{value:"Silhouette Analysis",id:"silhouette-analysis",level:3},{value:"Limits of k-means",id:"limits-of-k-means",level:2},{value:"Nonlinear boundaries",id:"nonlinear-boundaries",level:3},{value:"Large Number of samples",id:"large-number-of-samples",level:3},{value:"References",id:"references",level:3}],u={toc:c},m="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"k-means-clustering"},"K-Means Clustering"),(0,i.kt)("p",null,"K-Means Clustering is an unsupervided machine learning model, that belongs to the class of clustering algotithms."),(0,i.kt)("h2",{id:"clustering-algorithms"},"Clustering Algorithms"),(0,i.kt)("p",null,"Clustering Algorithms seek to learn from the properties of the data, an optimal division or discrete labeling of groups of points. The goal is to find groups of points that are similar to each other, but different from the points belonging to other groups."),(0,i.kt)("h2",{id:"k-means"},"K-Means"),(0,i.kt)("p",null,"The k-means algorithm objective is for search a predetermined number of cluster within an unlabeled multidimensional dataset. Thus finding the optimal division of the dataset into k groups (clusters)."),(0,i.kt)("p",null,"We can define a optimal cluster if it satisfies the following conditions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the cluster center is the mean of all points belonging to the cluster"),(0,i.kt)("li",{parentName:"ul"},"each point is closer to its own cluster center than to other cluster centers")),(0,i.kt)("h2",{id:"expectationmaximization-em-algorithm"},"Expectation\u2013Maximization (EM) Algorithm"),(0,i.kt)("p",null,"The k-means algorithm NP-Hard, so it is not possible to find the optimal solution in a reasonable amount of time. So, the k-means algorithm uses a heuristic approach to find a solution."),(0,i.kt)("p",null,"The k-means algorithm is a particular case of the Expectation\u2013Maximization (EM) Algorithm, that is a general approach to learning in the presence of unobserved variables."),(0,i.kt)("p",null,"The approach consists in iteratively computing two steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"E-step: determine the expected value for the unobserved variables, given the current model parameters"),(0,i.kt)("li",{parentName:"ul"},"M-step: determine the maximum-likelihood model parameters, given the current expected values of the unobserved variables")),(0,i.kt)("p",null,"Using this is k-means algorithm:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Randomly choose k points as cluster centers."),(0,i.kt)("li",{parentName:"ol"},"Repeat until converged (i.e. cluster center assignments no longer change)):",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"(E-step) Assign each data point to the closest cluster center. (Find the distance between each point and each cluster center, and assign each point to the closest cluster center)"),(0,i.kt)("li",{parentName:"ol"},"(M-step) Update cluster centers to be the mean of all points assigned to that cluster.")))),(0,i.kt)("h2",{id:"how-to-choose-the-number-of-clusters"},"How to choose the number of clusters"),(0,i.kt)("p",null,"The k-means algorithm requires the number of clusters to be specified. But, how to choose the number of clusters?"),(0,i.kt)("p",null,"The best choice will depend on the particular dataset and the particular goals of any analysis. But, there are some approaches that can help us to choose the number of clusters."),(0,i.kt)("h3",{id:"elbow-method"},"Elbow Method"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(1332).Z,width:"1158",height:"622"})),(0,i.kt)("p",null,"The elbow method is a heuristic method to find the optimal number of clusters. It consists in plot the sum of squared distances of samples to their closest cluster center for different values of k. The optimal number of clusters is the value of k after which the sum of squared distances start to decrease in a linear fashion."),(0,i.kt)("h3",{id:"silhouette-analysis"},"Silhouette Analysis"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"TODO")),(0,i.kt)("h2",{id:"limits-of-k-means"},"Limits of k-means"),(0,i.kt)("h3",{id:"nonlinear-boundaries"},"Nonlinear boundaries"),(0,i.kt)("p",null,"K-means not work well handle with complicated geometries. It is not able to find non-linear boundaries between clusters. So, it is not able to find complex shapes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(3243).Z,width:"728",height:"557"})),(0,i.kt)("p",null,"To solve this problem, we can use other clustering algorithms, like Gaussian mixture models (GMM). But in Sklearn we have a kernelized k-means, that is able to find non-linear boundaries between clusters creating a high-dimensional projection of the data called ",(0,i.kt)("inlineCode",{parentName:"p"},"SpectralClustering"),"."),(0,i.kt)("h3",{id:"large-number-of-samples"},"Large Number of samples"),(0,i.kt)("p",null,"Because k-means use the EM algorithm, and have to access every sample at each iteration, the algorithm does not scale well to large number of samples."),(0,i.kt)("p",null,"The alternative is to use a subset of the data to find the cluster centers, and then use these cluster centers to assign labels to the full dataset. This is the idea behind the batch-based k-means algorithm, implemented in ",(0,i.kt)("inlineCode",{parentName:"p"},"sklearn.cluster.MiniBatchKMeans"),"."),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/4b5d3muPQmA?si=HrubssPSAWuuN3Un"},"https://youtu.be/4b5d3muPQmA?si=HrubssPSAWuuN3Un")),(0,i.kt)("li",{parentName:"ol"},"Python Data Science Handbook - Jake VanderPlas - Cap 47 - In Depth: k-Means Clustering")))}h.isMDXComponent=!0},1332:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-1-d99b10527faa7f123b80231eb441593c.png"},3243:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-06da094de0b53f8f231b12d20df1589c.png"}}]);