FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /source

COPY dotnet-app.csproj .
RUN dotnet restore

COPY . .
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine
WORKDIR /app

RUN addgroup -S -g 1001 appgroup && \
    adduser -S -g 1001 -u 1001 appuser 

COPY --from=build /app/publish .
EXPOSE 8080

RUN chown -R 1001:1001 . 

RUN apk add --no-cache curl
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD curl --fail http://localhost:8080/health || exit 1

USER appuser 

ENTRYPOINT ["dotnet", "dotnet-app.dll"]



