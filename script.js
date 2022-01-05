chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		ClockButton();
	}
});

function ClockButton()
{
    
    var buttonClass =  document.getElementsByClassName( "css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr" );
    for(var i=0 ; i<buttonClass.length; i=i+1)
    {
        if (buttonClass[i].getAttribute("data-testid")==="like")
        {
            buttonClass[i].click();
        }
    }
    alert("いいねしました");
}
