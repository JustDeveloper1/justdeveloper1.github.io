/*

MIT License

Copyright (c) 2025 JustDeveloper <https://justdeveloper.is-a.dev/>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

module.exports = {
    type: "redirect", 
    redirect_config: {
        url: "https://justdeveloper.is-a.dev/", 
        params: {
            title: "JustDeveloper",
            description: "Redirect to https://justdeveloper.is-a.dev/",
            htmlLang: "en"
        },
        paths: [
            {
                path_: "roblox",
                url: "https://www.roblox.com/users/1296091692/profile", 
                params: {
                    title: "JustDeveloper's Roblox Profile short link",
                    description: "THIS WEBSITE IS NOT CLAIMING TO BE ROBLOX WEBSITE AND IS NOT ASSOCIATED WITH ROBLOX IN ANY WAY",
                    keywords: "Just, Developer, JustDeveloper, Roblox",
                    htmlLang: "en"
                }
            }
        ]
    }
}