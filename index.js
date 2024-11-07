function dataReturnPayloadCallback_201(oRequest, oResponse, oPayload) {
			if(oResponse && oResponse.meta) {
				var totalRecords = oResponse.meta.totalRecords;
				var noResultFoundArea = document.getElementById("noResultFoundArea");
				if(totalRecords == 0) {
					if(!isUndefinedOrNull(noResultFoundArea)) {
						var orderInFleetSearchResultListPageSearchResultDiv = document.getElementById("orderInFleetSearchResultListPageSearchResultDiv");
						if(!isUndefinedOrNull(orderInFleetSearchResultListPageSearchResultDiv)) { 
							orderInFleetSearchResultListPageSearchResultDiv.innerHTML = "";
						}
						noResultFoundArea.style.display="block";
						noResultFoundArea.innerHTML = noResultFoundArea.innerHTML + "<BR>"; 
					}
					var orderInFleetSearchRersultSectionIncludingSeparatorDiv = document.getElementById("orderInFleetSearchRersultSectionIncludingSeparatorDiv");
					if(!isUndefinedOrNull(orderInFleetSearchRersultSectionIncludingSeparatorDiv)) {
						orderInFleetSearchRersultSectionIncludingSeparatorDiv.style.display="none";
						orderInFleetSearchRersultSectionIncludingSeparatorDiv.innerHTML = "<BR><BR>";
					}
				} else if(totalRecords > 5) {
					var viewMoreOrderInFleetVehicleLink = "";
					if(oResponse.meta && oResponse.meta.extraAttributes && oResponse.meta.extraAttributes.viewMoreVehicleLink) {
						viewMoreOrderInFleetVehicleLink = oResponse.meta.extraAttributes.viewMoreVehicleLink;
					} 
					if(viewMoreOrderInFleetVehicleLink != '') {
						viewMoreOrderInFleetVehicleLink = "volumeInventoryPurchase.html?from=View%20More&rd=" + encodeURIComponent(viewMoreOrderInFleetVehicleLink);
						var viewMoreOrderInFleetVehicleLinkDiv = document.getElementById("viewMoreOrderInFleetVehicleLink");
						var searchClickToViewMoreMsg = escapeHtml(document.getElementById("searchClickToViewMoreMsg").value);
						var anchor = document.createElement("a");
						anchor.href = viewMoreOrderInFleetVehicleLink;
						anchor.target = "_blank";
						anchor.textContent = searchClickToViewMoreMsg;
						viewMoreOrderInFleetVehicleLinkDiv.innerHTML = '';
						viewMoreOrderInFleetVehicleLinkDiv.appendChild(anchor);
					}
				}
			}
}
