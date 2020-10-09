"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = function (method, url, data) {
    return new Promise(function (resolve, reject) {
        wx.request({
            method: method,
            url: "http://bl.7yue.pro" + url,
            header: {
                appkey: 'hAtuep19V7aysiBZ',
                'content-type': 'application/json',
            },
            data: data,
            success: function (res) {
                resolve(res);
            },
            fail: function (res) {
                reject(res);
                wx.showToast({
                    icon: 'none',
                    title: res.errMsg,
                });
                throw new Error(res.errMsg);
            }
        });
    });
};
exports.getData = function (url, data) {
    var queryString = '';
    if (data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var value = data[key];
                if (value) {
                    queryString += !queryString ? "?" + key + "=" + value : "&" + key + "=" + value;
                }
            }
        }
    }
    url += queryString;
    return exports.fetchData('GET', url, data);
};
exports.postData = function (url, data) {
    return exports.fetchData('POST', url, data);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hEYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmV0Y2hEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRWEsUUFBQSxTQUFTLEdBQUcsVUFBQyxNQUFzQixFQUFFLEdBQVcsRUFBRSxJQUFZO0lBRXpFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFZLEVBQUUsTUFBVztRQUMzQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxRQUFBO1lBQ04sR0FBRyxFQUFFLHVCQUFxQixHQUFLO1lBQy9CLE1BQU0sRUFBRTtnQkFDTixNQUFNLEVBQUUsa0JBQWtCO2dCQUMxQixjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0QsSUFBSSxNQUFBO1lBQ0osT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNaLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNO2lCQUNsQixDQUFDLENBQUM7Z0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBO0FBRVksUUFBQSxPQUFPLEdBQUcsVUFBQyxHQUFXLEVBQUUsSUFBNEI7SUFDL0QsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLElBQUksSUFBSSxFQUFFO1FBQ1IsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksS0FBSyxFQUFFO29CQUNULFdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBSSxHQUFHLFNBQUksS0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFJLEdBQUcsU0FBSSxLQUFPLENBQUM7aUJBQ3ZFO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsR0FBRyxJQUFJLFdBQVcsQ0FBQztJQUNuQixPQUFPLGlCQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFFVyxRQUFBLFFBQVEsR0FBRyxVQUFDLEdBQVcsRUFBRSxJQUE0QjtJQUNoRSxPQUFPLGlCQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIElEYXRhID0gc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgYW55PiB8IEFycmF5QnVmZmVyO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYXRhID0gKG1ldGhvZDogJ0dFVCcgfCAnUE9TVCcsIHVybDogc3RyaW5nLCBkYXRhPzogSURhdGEpID0+IHtcbiAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKClcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KSA9PiB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICBtZXRob2QsXG4gICAgICB1cmw6IGBodHRwOi8vYmwuN3l1ZS5wcm8ke3VybH1gLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIGFwcGtleTogJ2hBdHVlcDE5VjdheXNpQlonLFxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGRhdGEsXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0sXG4gICAgICBmYWlsKHJlcykge1xuICAgICAgICByZWplY3QocmVzKTtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgdGl0bGU6IHJlcy5lcnJNc2csXG4gICAgICAgIH0pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzLmVyck1zZyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhID0gKHVybDogc3RyaW5nLCBkYXRhPzoge1tuYW1lOiBzdHJpbmddOiBhbnl9KSA9PiB7XG4gIGxldCBxdWVyeVN0cmluZyA9ICcnO1xuICBpZiAoZGF0YSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9ICFxdWVyeVN0cmluZyA/IGA/JHtrZXl9PSR7dmFsdWV9YCA6IGAmJHtrZXl9PSR7dmFsdWV9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cmwgKz0gcXVlcnlTdHJpbmc7XG4gIHJldHVybiBmZXRjaERhdGEoJ0dFVCcsIHVybCwgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgcG9zdERhdGEgPSAodXJsOiBzdHJpbmcsIGRhdGE/OiB7W25hbWU6IHN0cmluZ106IGFueX0pID0+IHtcbiAgcmV0dXJuIGZldGNoRGF0YSgnUE9TVCcsIHVybCwgZGF0YSk7XG59OyJdfQ==