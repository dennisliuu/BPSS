// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
const fs = require('fs');
API_KEY = '---'
sgMail.setApiKey(API_KEY);

const msg = {
  to: 't105360725@ntut.org.tw',
  from: 'System@BPASS.com',
  subject: 'Paper upload success!',
  text: 'Congratulations! Your paper has been uploaded sucessfully.',
  html: `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title></title>
      <style type="text/css">
        @media only screen and (max-width:480px){body,table,td,p,a,li,blockquote{-webkit-text-size-adjust:none !important}body{width:100% !important;min-width:100% !important}td[id=bodyCell]{padding:10px !important}table.kmMobileHide{display:none !important}table[class=kmTextContentContainer]{width:100% !important}table[class=kmBoxedTextContentContainer]{width:100% !important}td[class=kmImageContent]{padding-left:0 !important;padding-right:0 !important}img[class=kmImage]{width:100% !important}td.kmMobileStretch{padding-left:0 !important;padding-right:0 !important}table[class=kmSplitContentLeftContentContainer],table[class=kmSplitContentRightContentContainer],table[class=kmColumnContainer],td[class=kmVerticalButtonBarContentOuter] table[class=kmButtonBarContent],td[class=kmVerticalButtonCollectionContentOuter] table[class=kmButtonCollectionContent],table[class=kmVerticalButton],table[class=kmVerticalButtonContent]{width:100% !important}td[class=kmButtonCollectionInner]{padding-left:9px !important;padding-right:9px !important;padding-top:9px !important;padding-bottom:0 !important;background-color:transparent !important}td[class=kmVerticalButtonIconContent],td[class=kmVerticalButtonTextContent],td[class=kmVerticalButtonContentOuter]{padding-left:0 !important;padding-right:0 !important;padding-bottom:9px !important}table[class=kmSplitContentLeftContentContainer] td[class=kmTextContent],table[class=kmSplitContentRightContentContainer] td[class=kmTextContent],table[class=kmColumnContainer] td[class=kmTextContent],table[class=kmSplitContentLeftContentContainer] td[class=kmImageContent],table[class=kmSplitContentRightContentContainer] td[class=kmImageContent]{padding-top:9px !important}td[class="rowContainer kmFloatLeft"],td[class="rowContainer kmFloatLeft firstColumn"],td[class="rowContainer kmFloatLeft lastColumn"]{float:left;clear:both;width:100% !important}table[id=templateContainer],table[class=templateRow]{max-width:600px !important;width:100% !important}h1{font-size:24px !important;line-height:130% !important}h2{font-size:20px !important;line-height:130% !important}h3{font-size:18px !important;line-height:130% !important}h4{font-size:16px !important;line-height:130% !important}td[class=kmTextContent]{font-size:18px !important;line-height:150% !important}td[class=kmTextBlockInner] td[class=kmTextContent]{padding-right:18px !important;padding-left:18px !important}table[class="kmTableBlock kmTableMobile"] td[class=kmTableBlockInner]{padding-left:9px !important;padding-right:9px !important}table[class="kmTableBlock kmTableMobile"] td[class=kmTableBlockInner] [class=kmTextContent]{font-size:18px !important;line-height:150% !important;padding-left:4px !important;padding-right:4px !important}}
      </style>
    
  <style type="text/css">
  
  </style>
  </head>
    
    <body style="margin:0;padding:0;background-color:#FFF">
      <center>
        <table align="center" border="0" cellpadding="0" cellspacing="0" id="bodyTable"
        width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;background-color:#FFF;height:100%;margin:0;width:100%">
          <tbody>
            <tr>
              <td align="center" id="bodyCell" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding-top:50px;padding-left:20px;padding-bottom:20px;padding-right:20px;border-top:0;height:100%;margin:0;width:100%">
                <table border="0" cellpadding="0" cellspacing="0" id="templateContainer" width="600"
                style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;border:0 none #aaa;background-color:#FFF;border-radius:0">
                  <tbody>
                    <tr>
                      <td id="templateContainerInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                          <tr>
                            <td align="center" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                              <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%"
                              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                <tbody>
                                  <tr>
                                    <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0"></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                              <table border="0" cellpadding="0" cellspacing="0" class="templateRow" width="100%"
                              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                <tbody>
                                  <tr>
                                    <td class="rowContainer kmFloatLeft" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                      <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmImageBlockOuter">
                                          <tr>
                                            <td class="kmImageBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:9px;"
                                            valign="top">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer"
                                              width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                <tbody>
                                                  <tr>
                                                    <td class="kmImageContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;padding-top:0px;padding-bottom:0;padding-left:9px;padding-right:9px;text-align: center;">
                                                      <a href="http://shop.ugmonk.com/?_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_campaign=2015+Recap+%2528mAxfwy%2529&utm_medium=email&utm_source=Newsletter+Master+List+%255BNon-Sales%252FPromotion+Related%255D"
                                                      target="_self" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">
                                                        <img align="center" alt="" class="kmImage" src="https://klaviyo.s3.amazonaws.com/company%2FaVinKJ%2Fimages%2Fugmonk_logo6002.jpg"
                                                        width="334" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:334px;">
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmImageBlockOuter">
                                          <tr>
                                            <td class="kmImageBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0px;"
                                            valign="top">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer"
                                              width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                <tbody>
                                                  <tr>
                                                    <td class="kmImageContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;padding:0;text-align: center;">
                                                      <img align="center" alt="The Past &amp; The Future" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/aVinKJ/images/d9a9f770-d2a7-4dfc-8ef4-7ee1f2712276.gif"
                                                      width="600" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:600px;">
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmTextBlockOuter">
                                          <tr>
                                            <td class="kmTextBlockInner" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer"
                                              width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                <tbody>
                                                  <tr>
                                                    <td class="kmTextContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:#505050;font-family:Georgia;font-size:18px;line-height:150%;text-align:left;padding-bottom:30px;padding-right:18px;padding-left:18px;padding-top:9px;">
                                                      <p style="margin:0;padding-bottom:1em">2015 was officially our biggest year since we launched over 7 years ago! We’re
                                                        excited to have sustainable growth as we move at a slow &amp; steady pace getting
                                                        better at what we do each year.</p>
                                                      <p style="margin:0;padding-bottom:1em">I’ve been thinking a lot about what’s next for Ugmonk and where we should head
                                                        in 2016. We've got some big changes in store, not the least of which are on a personal
                                                        note: I turned 30 this past weekend, and my wife and I will also be welcoming our
                                                        new baby boy in just a few months :)</p>
                                                      <p style="margin:0;padding-bottom:1em">As for Ugmonk, while we've made lots of incremental changes over the years, this
                                                        year we want to refocus and unify everything around the strengths that have made
                                                        Ugmonk successful so far. </p>
                                                      <p style="margin:0;padding-bottom:1em">My goal is to make Ugmonk even more transparent and personal, sharing more about
                                                        the ups and down of business and the things I'm learning along the way. I hope
                                                        you're excited to come along for the journey!</p>
                                                      <p style="margin:0;padding-bottom:0"><strong>In the mean time, here's a look back at some stats from our best year yet:</strong>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmImageBlockOuter">
                                          <tr>
                                            <td class="kmImageBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0px;"
                                            valign="top">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer"
                                              width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                <tbody>
                                                  <tr>
                                                    <td class="kmImageContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;padding:0;text-align: center;">
                                                      <img align="center" alt="" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/aVinKJ/images/32517b69-17bc-4e1f-befd-e924d6946029.gif"
                                                      width="600" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:600px;">
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmImageBlockOuter">
                                          <tr>
                                            <td class="kmImageBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0px;padding-top:15px;"
                                            valign="top">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer"
                                              width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                <tbody>
                                                  <tr>
                                                    <td class="kmImageContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;padding:0;text-align: center;">
                                                      <img align="center" alt="Best Sellers" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/aVinKJ/images/45dafbac-ee5c-40ee-8c12-35154f2221b4.gif"
                                                      width="600" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:600px;">
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmTextBlockOuter">
                                          <tr>
                                            <td class="kmTextBlockInner" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer"
                                              width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                <tbody>
                                                  <tr>
                                                    <td class="kmTextContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:#505050;font-family:Georgia;font-size:18px;line-height:150%;text-align:left;padding-top:20px;padding-bottom:30px;line-height:100%;padding-left:18px;padding-right:18px;">
                                                      <p style="margin:0;padding-bottom:1em;text-align: center;"><span style="font-size:18px;"><a href="http://shop.ugmonk.com/products/mountains-charcoal?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">Mountains</a> - <a href="http://shop.ugmonk.com/products/mountains-charcoal?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">Charcoal</a> <a href="http://shop.ugmonk.com/products/mountains-black-series?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D&collection=clothing-all" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">Black</a> <a href="http://shop.ugmonk.com/products/mountains?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">Classic</a></span>
                                                      </p>
                                                      <p style="margin:0;padding-bottom:1em;text-align: center;"><span style="font-size:18px;"><a href="http://shop.ugmonk.com/pages/ugmonk-leather-goods?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">Premium Leather Mousepad (Natural)</a></span>
                                                      </p>
                                                      <p style="margin:0;padding-bottom:1em;text-align: center;"><span style="font-size:18px;"><a href="http://shop.ugmonk.com/products/day-night-2-shirt-set?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D&collection=clothing-all" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">Day &amp; Night</a></span>
                                                      </p>
                                                      <p style="margin:0;padding-bottom:1em;text-align: center;"><span style="font-size:18px;"><a href="http://shop.ugmonk.com/products/ripple-effect?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D&collection=clothing-tees" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">Minimize (Forest)</a></span>
                                                      </p>
                                                      <p style="margin:0;padding-bottom:1em;text-align: center;"><span style="font-size:18px;"><a href="http://shop.ugmonk.com/products/ripple-effect?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D&collection=clothing-tees" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">Ripple Effect (Heather Gray)</a></span>
                                                      </p>
                                                      <p style="margin:0;padding-bottom:0;text-align: center;"><span style="font-size:18px;"><a href="http://shop.ugmonk.com/products/premium-ampersand-crewneck-cranberry?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D&collection=clothing-hoodies" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">Premium Ampersand Crewneck (Cranberry)</a></span>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmImageBlockOuter">
                                          <tr>
                                            <td class="kmImageBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0px;padding-top:20px;"
                                            valign="top">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer"
                                              width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                <tbody>
                                                  <tr>
                                                    <td class="kmImageContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;padding:0;text-align: center;">
                                                      <img align="center" alt="Highlights" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/aVinKJ/images/577934aa-c6ed-401b-b7d4-a257401f30f2.gif"
                                                      width="600" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:600px;">
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmTextBlockOuter">
                                          <tr>
                                            <td class="kmTextBlockInner" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;background-color:#F5F5F5;">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer"
                                              width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                <tbody>
                                                  <tr>
                                                    <td class="kmTextContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:#505050;font-family:Georgia;font-size:18px;line-height:150%;text-align:left;padding-top:20px;padding-bottom:40px;line-height:100%;padding-left:18px;padding-right:18px;">
                                                      <p style="margin:0;padding-bottom:1em;text-align: center;"><span style="font-size:18px;"><a href="http://shop.ugmonk.com/products/7th-anniversary-set?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">7th Anniversary Set</a></span>
                                                      </p>
                                                      <p style="margin:0;padding-bottom:1em;text-align: center;"><span style="font-size:18px;"><a href="http://www.ugmonk.com/extras/lookbook/?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">New Lookbook</a></span>
                                                      </p>
                                                      <p style="margin:0;padding-bottom:1em;text-align: center;"><span style="font-size:18px;"><a href="http://minimums.com/jeff-sheldon/?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">Minimums Feature</a></span>
                                                      </p>
                                                      <p style="margin:0;padding-bottom:1em;text-align: center;"><span style="font-size:18px;"><a href="http://www.ugmonk.com/2015/04/16/a-small-part-of-something-big/?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">Honduras trip</a></span>
                                                      </p>
                                                      <p style="margin:0;padding-bottom:0;text-align: center;"><span style="font-size:18px;"><a href="http://startupcamp.com/podcast/start-million-dollar-clothing-line-jeff-sheldon-ugmonk/?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">Startup Camp podcast</a></span>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmImageBlockOuter">
                                          <tr>
                                            <td class="kmImageBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0px;"
                                            valign="top">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer"
                                              width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                <tbody>
                                                  <tr>
                                                    <td class="kmImageContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;padding:0;text-align: center;">
                                                      <img align="center" alt="Collaborations" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/aVinKJ/images/468fdad0-cc30-4729-a9d1-eb53f701031a.gif"
                                                      width="600" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:600px;">
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmTextBlockOuter">
                                          <tr>
                                            <td class="kmTextBlockInner" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer"
                                              width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                <tbody>
                                                  <tr>
                                                    <td class="kmTextContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:#505050;font-family:Georgia;font-size:18px;line-height:150%;text-align:left;padding-top:20px;padding-bottom:40px;line-height:100%;padding-left:18px;padding-right:18px;">
                                                      <p style="margin:0;padding-bottom:1em;text-align: center;"><span style="font-size:18px;"><a href="http://project26.meritgoodness.com/?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">26 – Merit</a></span>
                                                      </p>
                                                      <p style="margin:0;padding-bottom:1em;text-align: center;"><span style="font-size:18px;"><a href="http://www.krochetkids.org/ugmonk/?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">Behind Every Product is a Person – Krochet Kids</a></span>
                                                      </p>
                                                      <p style="margin:0;padding-bottom:0;text-align: center;"><span style="font-size:18px;"><a href="http://reachrecords.com/ugmonk/?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">116 x Ugmonk Collection</a></span>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="kmButtonBlock"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmButtonBlockOuter">
                                          <tr>
                                            <td valign="top" align="center" class="kmButtonBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:9px 18px;padding-top:15px;padding-bottom:15px;">
                                              <table border="0" cellpadding="0" cellspacing="0" width="" class="kmButtonContentContainer"
                                              style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;background-color:#999;background-color:#00AEFF;border-radius:2px;">
                                                <tbody>
                                                  <tr>
                                                    <td align="center" valign="middle" class="kmButtonContent" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:white;font-family:Georgia;font-size:16px;padding:15px;padding-top:15px;padding-bottom:15px;padding-left:30px;padding-right:30px;color:#ffffff;font-weight:normal;font-size:20px;font-family:Helvetica, Arial;">
                                                      <a class="kmButton" title="" href="http://shop.ugmonk.com/?_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_campaign=2015+Recap+%2528mAxfwy%2529&utm_medium=email&utm_source=Newsletter+Master+List+%255BNon-Sales%252FPromotion+Related%255D"
                                                      target="_self" style="word-wrap:break-word;font-weight:normal;letter-spacing:-0.5px;line-height:100%;text-align:center;text-decoration:underline;color:#00AEFF;font-family:Georgia;font-size:16px;text-decoration:initial;color:#ffffff;font-weight:normal;font-size:20px;font-family:Helvetica, Arial;padding-top:0;padding-bottom:0;">Browse the Ugmonk Shop</a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmTextBlockOuter">
                                          <tr>
                                            <td class="kmTextBlockInner" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer"
                                              width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                <tbody>
                                                  <tr>
                                                    <td class="kmTextContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:#505050;font-family:Georgia;font-size:18px;line-height:150%;text-align:left;padding-top:9px;padding-bottom:9px;padding-left:18px;padding-right:18px;">
                                                      <p style="margin:0;padding-bottom:1em;text-align: center;">As always, I'd love to connect with you and hear your thoughts about anything I'm
                                                        doing. Just reply to this email to say hello.</p>
                                                      <p style="margin:0;padding-bottom:1em;text-align: center;">Thanks for your support!</p>
                                                      <p style="margin:0;padding-bottom:0;text-align: center;">Jeff Sheldon
                                                        <br>Founder/Designer
                                                        <br>
                                                        <a href="http://shop.ugmonk.com/?_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_campaign=2015+Recap+%2528mAxfwy%2529&utm_medium=email&utm_source=Newsletter+Master+List+%255BNon-Sales%252FPromotion+Related%255D"
                                                        style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">Ugmonk.com</a>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="kmButtonBarBlock" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmButtonBarOuter">
                                          <tr>
                                            <td class="kmButtonBarInner" align="center" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding-top:9px;padding-bottom:9px;padding-left:9px;padding-right:9px;">
                                              <table border="0" cellpadding="0" cellspacing="0" class="kmButtonBarContentContainer"
                                              width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                <tbody>
                                                  <tr>
                                                    <td align="center" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding-left:9px;padding-right:9px;">
                                                      <table border="0" cellpadding="0" cellspacing="0" class="kmButtonBarContent" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;font-family:Georgia">
                                                        <tbody>
                                                          <tr>
                                                            <td align="center" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                                <tbody>
                                                                  <tr>
                                                                    <td valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                                      <table align="left" border="0" cellpadding="0" cellspacing="0" class="" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                                        <tbody>
                                                                          <tr>
                                                                            <td align="center" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding-right:10px;">
                                                                              <a href="https://twitter.com/ugmonk?_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D"
                                                                              target="_blank" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">
                                                                                <img src="https://klaviyo.s3.amazonaws.com/company%2FaVinKJ%2Fimages%2Ftwitter.png"
                                                                                alt="Twitter" class="kmButtonBlockIcon" width="51" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;width:51px; max-width:51px; display:block;">
                                                                              </a>
                                                                            </td>
                                                                          </tr>
                                                                        </tbody>
                                                                      </table>
                                                                      <!--[if gte mso 6]>
                                                                    </td>
                                                                    <td align="left" valign="top">
                                                                    <![endif]-->
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" class="" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                                      <tbody>
                                                                        <tr>
                                                                          <td align="center" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding-right:10px;">
                                                                            <a href="https://www.facebook.com/ugmonk?_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D&_rdr"
                                                                            target="_blank" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">
                                                                              <img src="https://klaviyo.s3.amazonaws.com/company%2FaVinKJ%2Fimages%2Ffb-icon.png"
                                                                              alt="Facebook" class="kmButtonBlockIcon" width="51" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;width:51px; max-width:51px; display:block;">
                                                                            </a>
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                    <!--[if gte mso 6]>
                                                                    </td>
                                                                    <td align="left" valign="top">
                                                                    <![endif]-->
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" class="" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                                      <tbody>
                                                                        <tr>
                                                                          <td align="center" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                                                                            <a href="https://www.instagram.com/ugmonk/?_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D"
                                                                            target="_blank" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">
                                                                              <img src="https://klaviyo.s3.amazonaws.com/company%2FaVinKJ%2Fimages%2Fig-icon.png"
                                                                              alt="Instagram" class="kmButtonBlockIcon" width="51" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;width:51px; max-width:51px; display:block;">
                                                                            </a>
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                    <!--[if gte mso 6]>
                                                                    </td>
                                                                    <td align="left" valign="top">
                                                                    <![endif]-->
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmImageBlockOuter">
                                          <tr>
                                            <td class="kmImageBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:9px;"
                                            valign="top">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer"
                                              width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                <tbody>
                                                  <tr>
                                                    <td class="kmImageContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;padding-top:0px;padding-bottom:0;padding-left:9px;padding-right:9px;text-align: center;">
                                                      <a href="http://shop.ugmonk.com/pages/share?utm_campaign=2015+Recap+%28mAxfwy%29&utm_medium=email&_ke=aGVsbG9AbWF0dGhld3NtaXRoLmNj&utm_source=Newsletter+Master+List+%5BNon-Sales%2FPromotion+Related%5D"
                                                      target="_self" style="word-wrap:break-word;color:#00AEFF;font-weight:normal;text-decoration:underline">
                                                        <img align="center" alt="Refer a friend and get $15" class="kmImage" src="https://d3k81ch9hvuctc.cloudfront.net/company/aVinKJ/images/b624f5ca-cecd-4cfc-aeff-c7547e410cd3.gif"
                                                        width="462" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:bottom;max-width:462px;">
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" width="100%"
                                      style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                        <tbody class="kmTextBlockOuter">
                                          <tr>
                                            <td class="kmTextBlockInner" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer"
                                              width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                                                <tbody>
                                                  <tr>
                                                    <td class="kmTextContent" valign="top" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:#505050;font-family:Georgia;font-size:18px;line-height:150%;text-align:left;font-size:11px;color:#a9a9a9;padding-bottom:9px;text-align:center;padding-right:18px;padding-left:18px;padding-top:9px;">No longer want to receive these emails? You can
                                                      <a class="unsubscribe-link" style="color:#00AEFF;font-weight:normal;text-decoration:underline;"
                                                      href="http://ugmonk.myklpages.com/p/unsubscribe/xxxxxxxx">unsubscribe here</a>.</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
      <img src="http://delivery.klaviyomail.com/wf/open?upn=CmwAv3oRa0AH4Hd1bWC6X6p1xqrVRedZKih16VD-2B0xrqbCbvivp5f9pbhUNO1ecDuvKS-2Fi9pAQjJRtjA5o9L6vY52T3hpNSJ31K7dC2RVwUuqc0uLMz4maC1kHDP0sd8IhMneo5t1qhVQgQ-2FjVZpoYpvRC8YybhZbjbL2g1ENIk0AuEKMe64rO2V3uHl0tZgfjJb4uyEPGP48lGvj2cUxadMFcaVQhKi-2FU5olAjNNCLNCz5m6LZ-2FcMY6GPzm5AR9npJeeUdK82vEbQT8jwzw0ozOOqfs4GdwSwRnc5cGjECvZ4dmo91hcsyNU0DTvvMu"
      alt="" width="1" height="1" border="0" style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;"
      />
    </body>
  
  </html>`,
};
sgMail.send(msg);
