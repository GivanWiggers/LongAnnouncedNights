FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["LANBackend/LANBackend.csproj", "LANBackend/"]
RUN dotnet restore "LANBackend/LANBackend.csproj"
COPY . .
WORKDIR "/src/LANBackend"
RUN dotnet build "LANBackend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "LANBackend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "LANBackend.dll"]