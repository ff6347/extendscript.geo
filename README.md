ExtendScript.Geo  
================  

A collection of functions for calculating geo locations. As used in [AEMap.jsx](http://aescripts.com/aemap/) and [Locations.jsx](http://aescripts.com/locations/)

These functions are heavily based on mbostocks protoviz.
Why protoviz and not D3? because extracting some projection types from D3 is much more complex then using protoviz  

https://github.com/mbostock/protovis  

##Usage  

This is still a work in progress  
development done using grunt. Run:  

    grunt build-id build-ae default  


##Supported Projections  

- [mercator](http://en.wikipedia.org/wiki/Mercator_projection)  
- [gallpeters](http://en.wikipedia.org/wiki/Gall-Peters_projection)  
- [sinusoidal](http://en.wikipedia.org/wiki/Sinusoidal_projection)  
- [aitoff](http://en.wikipedia.org/wiki/Aitoff_projection)  
- [hammer](http://en.wikipedia.org/wiki/Hammer_projection)  

See also [this](http://xkcd.com/977/) for a good laugh.  

##License  

Copyright (c)  2014 Fabian "fabiantheblind" Morón Zirfas  
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software  without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to  permit persons to whom the Software is furnished to do so, subject to the following conditions:  
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  

see also http://www.opensource.org/licenses/mit-license.php

