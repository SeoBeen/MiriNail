package com.nail.backend.domain.nailart.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@Builder //sac추가
@NoArgsConstructor
@AllArgsConstructor
public class NailartListGetRes {

    private long nailartSeq;

    private long designerSeq;

    private String designerNickname;

    private String designerShopName;

    private long tokenId;

    private String nailartName;

    private String nailartDesc;

    private String nailartType;

    private String nailartColor;

    private String nailartDetailColor;

    private String nailartWeather;

    private String nailartThumbnailUrl;

    private boolean nailartAvailable;

    private int nailartPrice;

    private Timestamp nailartRegedAt;

    private float nailartRating;

    private int totalCount;

    private boolean isFavorited;
}
