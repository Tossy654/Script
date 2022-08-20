const url = $request.url
$surge.setSelectGroupPolicy('Bili', 'HK');
$notification.post('Bili', 'changed to', '🇭🇰 HK');
$done(url);
