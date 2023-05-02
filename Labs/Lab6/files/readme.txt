The color changing doesnt work for the added list elemets, it stays black. This is
because the function for color toggling is applied to all the list elements that exist
when the document is loaded ($(document).ready). I fixed this using Jquery .on().

http://brooka9.eastus.cloudapp.azure.com/